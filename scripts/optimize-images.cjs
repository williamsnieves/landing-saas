#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG images to WebP format for better performance
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

console.log('📸 Image Optimization Script');
console.log('================================\n');

const imagesDir = path.join(__dirname, '../public/images');
const heroImage = path.join(imagesDir, 'hero-dashboard.png');

if (!fs.existsSync(heroImage)) {
    console.error('❌ Hero image not found:', heroImage);
    process.exit(1);
}

console.log('✅ Found hero-dashboard.png');
console.log('📊 Original size:', (fs.statSync(heroImage).size / 1024).toFixed(2), 'KB');

console.log('\n📝 To optimize images to WebP format, you can:');
console.log('   1. Use online tools like squoosh.app');
console.log('   2. Use ImageMagick: convert hero-dashboard.png -quality 80 hero-dashboard.webp');
console.log('   3. Use sharp package: npm install sharp && node optimize-with-sharp.js');
console.log('\n💡 Recommended: Convert to WebP with 80% quality for ~70% size reduction');
console.log('   Target size: ~140KB (from current 470KB)\n');

// Check if sharp is available
try {
    require.resolve('sharp');
    console.log('🔍 Sharp package detected! Running optimization...\n');

    const sharp = require('sharp');
    const outputWebP = path.join(imagesDir, 'hero-dashboard.webp');

    sharp(heroImage)
        .webp({ quality: 80 })
        .toFile(outputWebP)
        .then(info => {
            console.log('✅ WebP image created successfully!');
            console.log('📊 New size:', (info.size / 1024).toFixed(2), 'KB');
            console.log('💾 Saved:', ((1 - info.size / fs.statSync(heroImage).size) * 100).toFixed(1), '% reduction');
            console.log('📁 Location:', outputWebP);
        })
        .catch(err => {
            console.error('❌ Error creating WebP:', err.message);
        });

} catch (e) {
    console.log('ℹ️  Sharp package not installed.');
    console.log('   To auto-optimize, run: npm install --save-dev sharp');
    console.log('   Then run this script again.\n');
}
