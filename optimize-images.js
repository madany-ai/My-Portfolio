/**
 * Image Optimization Script
 * Converts images to WebP format with multiple sizes for responsive loading
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

async function optimizeImages() {
  console.log('🖼️ Starting image optimization...\n');

  // Profile image optimization
  const profilePath = path.join(imagesDir, 'profile.png');
  
  if (fs.existsSync(profilePath)) {
    const originalSize = fs.statSync(profilePath).size;
    console.log(`📷 Original profile.png: ${(originalSize / 1024).toFixed(2)} KB`);

    try {
      // Create WebP versions at different sizes
      const sizes = [
        { width: 400, suffix: '-400' },
        { width: 600, suffix: '-600' },
        { width: 800, suffix: '' },  // Default size
      ];

      for (const { width, suffix } of sizes) {
        const webpPath = path.join(imagesDir, `profile${suffix}.webp`);
        
        await sharp(profilePath)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(webpPath);
        
        const newSize = fs.statSync(webpPath).size;
        console.log(`✅ Created profile${suffix}.webp: ${(newSize / 1024).toFixed(2)} KB (${width}px)`);
      }

      // Create optimized PNG fallback
      const optimizedPngPath = path.join(imagesDir, 'profile-optimized.png');
      await sharp(profilePath)
        .resize(800, null, { withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(optimizedPngPath);
      
      const pngSize = fs.statSync(optimizedPngPath).size;
      console.log(`✅ Created profile-optimized.png: ${(pngSize / 1024).toFixed(2)} KB`);

      // Calculate savings
      const webpSize = fs.statSync(path.join(imagesDir, 'profile.webp')).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      console.log(`\n💰 Total savings: ${savings}% (${((originalSize - webpSize) / 1024).toFixed(2)} KB saved)`);

    } catch (error) {
      console.error('❌ Error optimizing images:', error);
    }
  } else {
    console.log('❌ profile.png not found');
  }

  console.log('\n✨ Image optimization complete!');
}

optimizeImages();
