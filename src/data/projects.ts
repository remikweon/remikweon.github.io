
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: ProjectImage[];
  tags: string[];
  content: string;
  github?: string;
}

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [ 

{
  slug: "local-feature-matching-ransac",
  title: "Local Feature Matching & Image Alignment",
  description:
    "Implementing Harris corner detection, SIFT feature descriptors, and RANSAC-based homography estimation for robust image matching and alignment.",
  thumbnail: `${base}projects/cv/project2/image_alignment.png`,
  tags: [
    "Python",
    "NumPy",
    "PyTorch",
    "Computer Vision",
    "SIFT",
    "RANSAC",
  ],
  images: [
    {
      src: `${base}projects/cv/project2/harris_corner_detection.png`,
      alt: "Harris corner detection on Notre Dame images",
      caption:
        "Figure 1. Interest points detected using the Harris corner detector.",
    },
    {
      src: `${base}projects/cv/project2/normalized_vs_sift_feature_matching.png`,
      alt: "Normalized Patch and SIFT feature matching comparison",
      caption:
        "Figure 2. SIFT improved matching accuracy from 76.6% to 91.9% on the Notre Dame image pair.",
    },
    {
      src: `${base}projects/cv/project2/ransac_matches.png`,
      alt: "Feature correspondences before and after RANSAC",
      caption:
        "Figure 3. Comparison of feature correspondences before and after RANSAC-based outlier rejection.",
    },
    {
      src: `${base}projects/cv/project2/image_alignment_ransac_comparison.png`,
      alt: "Image alignment with and without RANSAC",
      caption:
        "Figure 4. Homography-based image alignment with and without RANSAC, demonstrating improved robustness to incorrect matches.",
    },
  ],
  content:
    "Implemented a local feature matching pipeline using Harris corner detection, normalized patch descriptors, and SIFT-inspired gradient histogram descriptors. Matched keypoints using the nearest-neighbor distance ratio test and evaluated correspondence accuracy across image pairs with different viewpoints.\n\nOn the Notre Dame image pair, SIFT-based descriptors improved matching accuracy from 76.6% to 91.9% compared with normalized patches. I also implemented RANSAC-based homography estimation to reject incorrect matches and improve image alignment through warping and blending. Additional experiments explored camera projection matrices and epipolar geometry.",
  }
  ,
  {
    slug: "computer-vision-image-filtering",
    title: "Image Filtering & Hybrid Images",
    description:
      "Implementing image convolution, frequency-based filtering, and hybrid images using NumPy and PyTorch.",
    thumbnail: `${base}projects/cv/project1/hybrid_image.png`,
    tags: ["Python", "NumPy", "PyTorch", "Computer Vision"],
    images: [
      {
        src: `${base}projects/cv/project1/image_filtering_comparison.png`,
        alt: "Comparison of image filtering techniques",
        caption:
          "Figure 1. Comparison of identity, box blur, Sobel, and Laplacian filters.",
      },
      {
        src: `${base}projects/cv/project1/hybrid_cat_dog.png`,
        alt: "Cat and dog hybrid image",
        caption:
          "Figure 2. Hybrid image combining low-frequency and high-frequency components.",
      },
    ],
    content:
      "Implemented image convolution and filtering from scratch using NumPy, including Gaussian blur, Sobel, and Laplacian filters. Created hybrid images by combining low-frequency information from one image with high-frequency information from another.\n\nReimplemented the hybrid image pipeline using PyTorch convolution operations and compared execution times. In the reported experiment, the PyTorch implementation was approximately 13 times faster than the NumPy implementation.",
  },
  {
    slug: "forest-cover-type-ml",
    title: "Forest Cover Type: A Comprehensive Machine Learning Study",
    description:
      "A comparative study of supervised learning, neural network optimization, clustering, and dimensionality reduction on the Forest CoverType dataset.",
    thumbnail: `${base}projects/ml/project1/forest_covertype_pca_umap_combined.png`,
    tags: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Supervised Learning",
      "Unsupervised Learning",
      "Optimization",
    ],
    images: [
      {
        src: `${base}projects/ml/project1/decision_tree_complexity_curve.png`,
        alt: "Decision Tree Complexity Curve",
        caption:
          "Figure 1. Decision Tree Complexity Curve",
      },
      {
        src: `${base}projects/ml/project1/op_validation_loss.png`,
        alt: "Optimizer Convergence",
        caption:
          "Figure 2. Validation loss versus optimizer updates for Adam, AdamW, and SGD without momentum",
      },
      {
        src: `${base}projects/ml/project1/forest_covertype_pca_umap_combined.png`,
        alt: "PCA vs. UMAP",
        caption:
          "Figure 3. 2D PCA vs. 2D UMAP",
      },
    ],
    
  content:
    "This project explores supervised learning, neural network optimization, and unsupervised learning using the Forest CoverType dataset. I compared classification models including Decision Trees, k-NN, SVMs, and Neural Networks, evaluated optimization and regularization strategies, and investigated clustering and dimensionality reduction techniques such as K-Means, GMM, PCA, and ICA.\n\nThe experiments showed that higher accuracy or lower validation loss does not necessarily translate into better class-balanced performance. They also revealed that natural clusters in the data do not closely align with the actual forest cover types.",

  },
];
