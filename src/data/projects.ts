export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content: string;
  github?: string;
}

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    slug: "computer-vision",
    title: "Computer Vision",
    description: "Exploring image recognition and deep learning.",
    image: `${base}projects/computer-vision.jpg`,
    tags: ["Python", "PyTorch", "OpenCV"],
    content:
      "A collection of computer vision experiments, including image processing and deep learning.",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Classification and model evaluation.",
    image: `${base}projects/machine-learning.jpg`,
    tags: ["Python", "scikit-learn"],
    content:
      "Exploring supervised learning algorithms, feature engineering, and model evaluation.",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Classification and model evaluation.",
    image: `${base}projects/machine-learning.jpg`,
    tags: ["Python", "scikit-learn"],
    content:
      "Exploring supervised learning algorithms, feature engineering, and model evaluation.",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Classification and model evaluation.",
    image: `${base}projects/machine-learning.jpg`,
    tags: ["Python", "scikit-learn"],
    content:
      "Exploring supervised learning algorithms, feature engineering, and model evaluation.",
  },
];
