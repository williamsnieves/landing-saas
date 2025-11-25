#!/usr/bin/env node

/**
 * DeepL Translation Automation Script
 * 
 * This script automatically translates missing keys in your i18n JSON files using DeepL API.
 * 
 * Usage:
 *   1. Get your DeepL API key from https://www.deepl.com/pro-api
 *   2. Add it to your .env file: DEEPL_API_KEY=your_key_here
 *   3. Run: npm run translate
 * 
 * The script will:
 *   - Read all translation files from src/i18n/locales/
 *   - Compare them with the source language (English)
 *   - Translate any missing keys using DeepL
 *   - Update the JSON files with new translations
 */

import * as deepl from 'deepl-node';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const SOURCE_LANG = 'en';

// DeepL language code mapping (DeepL uses different codes for some languages)
const DEEPL_LANG_MAP = {
    en: 'EN',
    es: 'ES',
    de: 'DE',
    pt: 'PT-PT',
    fr: 'FR',
    zh: 'ZH',
};

async function main() {
    const apiKey = process.env.DEEPL_API_KEY;

    if (!apiKey) {
        console.error('❌ Error: DEEPL_API_KEY not found in environment variables.');
        console.log('\n📝 To fix this:');
        console.log('   1. Get your API key from https://www.deepl.com/pro-api');
        console.log('   2. Create a .env file in the project root');
        console.log('   3. Add: DEEPL_API_KEY=your_key_here\n');
        process.exit(1);
    }

    console.log('🚀 Starting DeepL translation automation...\n');

    const translator = new deepl.Translator(apiKey);

    // Read source language file (English)
    const sourceFile = path.join(LOCALES_DIR, `${SOURCE_LANG}.json`);
    const sourceTranslations = JSON.parse(fs.readFileSync(sourceFile, 'utf-8'));

    // Get all locale files
    const localeFiles = fs.readdirSync(LOCALES_DIR).filter(f => f.endsWith('.json'));

    for (const file of localeFiles) {
        const lang = file.replace('.json', '');

        // Skip source language
        if (lang === SOURCE_LANG) {
            console.log(`⏭️  Skipping ${lang} (source language)`);
            continue;
        }

        console.log(`\n🌍 Processing ${lang}...`);

        const targetFile = path.join(LOCALES_DIR, file);
        const targetTranslations = JSON.parse(fs.readFileSync(targetFile, 'utf-8'));

        let translatedCount = 0;
        const updatedTranslations = { ...targetTranslations };

        // Find missing keys
        for (const [key, sourceText] of Object.entries(sourceTranslations)) {
            if (!targetTranslations[key] || targetTranslations[key] === sourceText) {
                console.log(`   📝 Translating: ${key}`);

                try {
                    const result = await translator.translateText(
                        String(sourceText),
                        SOURCE_LANG,
                        DEEPL_LANG_MAP[lang] || lang.toUpperCase()
                    );

                    updatedTranslations[key] = result.text;
                    translatedCount++;

                    // Small delay to respect API rate limits
                    await new Promise(resolve => setTimeout(resolve, 100));
                } catch (error) {
                    console.error(`   ❌ Error translating "${key}":`, error.message);
                }
            }
        }

        // Save updated translations
        if (translatedCount > 0) {
            fs.writeFileSync(targetFile, JSON.stringify(updatedTranslations, null, 2));
            console.log(`   ✅ Saved ${translatedCount} new translations to ${file}`);
        } else {
            console.log(`   ✨ No missing translations for ${lang}`);
        }
    }

    console.log('\n✅ Translation automation complete!\n');
}

main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
