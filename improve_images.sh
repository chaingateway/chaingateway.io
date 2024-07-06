#!/bin/bash

# Define the directory containing images
IMAGES_DIR="assets/images/screenshots"
FILES_DIR="./"

echo "Optimizing images in $IMAGES_DIR and its subdirectories..."

# Find all JPEG and PNG images in the specified directory and its subdirectories
find "$IMAGES_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 |
while IFS= read -r -d '' file; do
    # Optimize the image and replace the original file
    if [[ "$file" == *.jpg || "$file" == *.jpeg ]]; then
        mogrify -resize 1200x "$file"
    elif [[ "$file" == *.png ]]; then
        convert "$file" -resize 1200x -quality 80 "$file"
        # Convert PNG to WebP
        cwebp -q 80 "$file" -o "${file%.png}.webp"
        # Remove the original PNG image
        rm "$file"
    fi
done

echo "Optimization completed."
