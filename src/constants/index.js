import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/shahin-shah-28209a69/",
  github: "https://github.com/shahinkm",
};

export const INTRO_CONTENT = `I am a passionate AI/ML Engineer with a strong foundation in artificial intelligence and machine learning, currently pursuing an MSc in AI at NTU Singapore. With over two years of experience at ST Engineering, I specialize in building cutting-edge AI solutions spanning Natural Language Processing, Computer Vision, and Multi-Modal AI. My expertise includes training and fine-tuning models, deploying them effectively, and developing both backend and basic front-end applications. Leveraging tools like Python, PyTorch, Hugging Face Transformers, and LangChain, I excel in crafting robust, scalable AI workflows. Particularly enthusiastic about generative AI, I have worked extensively with LLMs and VLMs to deliver innovative, end-to-end solutions that bridge theory and application, driving meaningful impact in the AI landscape.`;

export const EXPERIENCES = [
  {
    year: "Jul 2022 - Present",
    company: "ST Engineering",
    role: "Senior AI/ML Engineer",
    projects: [
      {
        title: "AI-Driven Document Question Answering for Aircraft Maintenance",
        description:
          "Developed a full-stack question-answering application for aircraft maintenance documents using Retrieval-Augmented Generation (RAG). Built agentic workflows with LangChain and LangGraph, integrated AWS Bedrock (LLMs), S3 (file storage), and Postgres (chat history), and implemented the frontend using Next.js.",
        technologies: [
          "Python",
          "Gen AI",
          "LangChain",
          "LangGraph",
          "Next.js",
          "RAG",
        ],
      },
      {
        title:
          "Multimodal Document Understanding for PDF Information Extraction",
        description:
          "Fine-tuned a vision-language model (VLM) for layout-aware PDF information extraction, utilizing techniques to optimize memory usage during training. Deployed the model as a REST API endpoint using lmdeploy and Docker, complemented by a user-friendly Gradio interface for seamless interaction.",
        technologies: [
          "Python",
          "PyTorch",
          "VLM",
          "HuggingFace",
          "Gradio",
          "Docker",
        ],
      },
      {
        title: "LLM Application for Aviation Maintenance Logs",
        description:
          "Continued the pre-training of a large language model (LLM) on an aviation maintenance defect log corpus to enhance its domain-specific understanding and contextual comprehension. Fine-tuned the model to develop a classification system for identifying defect descriptions and an information extraction solution to accurately extract defects from maintenance logs.",
        technologies: ["Python", "PyTorch", "LLM", "HuggingFace"],
      },
      {
        title: "Anomaly Detection for Predictive Maintenance of Aircrafts",
        description:
          "Created transformer-based and autoencoder models for real-time anomaly detection in aircraft sensor data. These models improved accuracy and efficiency, enabling better predictive maintenance.",
        technologies: ["Python", "TensorFlow", "Autoencoder", "Transformer"],
      },
    ],
  },
  {
    year: "Dec 2016 - Jun 2022",
    company: "ST Engineering",
    role: "Aircraft Engineer",
    projects: [
      {
        title:
          "Stress Analysis for Passenger to Freighter (P2F) Conversion of Airbus A320 and A330 Aircrafts",
        description:
          "Performed stress analysis using FEM data to ensure aircraft structural safety during P2F conversions. Automated analysis processes and prepared documentation to meet aviation certification requirements.",
        technologies: ["Python", "FEM", "Problem Solving"],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Fine-Tuning Stable Diffusion Models for Text-to-Image Tasks",
    image: project1,
    description:
      "Fine-tuned the Stable Diffusion XL model using Low-Rank Adaptation (LoRA) to generate realistic fashion images from textual descriptions, achieving high-quality output under computational constraints. Demonstrated practical applicability by generating professional garment images, providing a scalable and cost-effective alternative to traditional photoshoots.",
    technologies: [
      "Python",
      "Image Generation",
      "HuggingFace",
      "PyTorch",
      "LoRA",
    ],
    link: "https://github.com/shahinkm/Stable-Diffusion-LoRA-Finetuning",
  },
  {
    title: "Blind Face Super-Resolution Using Advanced Neural Architectures",
    image: project2,
    description:
      "Developed a SwinIR-based model for super-resolution, enhancing image quality from degraded facial inputs while adhering to computational constraints. Integrated the SwinIR model with a U-Net-based GAN setup to achieve a balance between detail enhancement and natural appearance, significantly improving visual accuracy and realism.",
    technologies: ["Python", "PyTorch", "GAN"],
    link: "https://github.com/shahinkm/Blind-Face-Super-Resolution",
  },
  {
    title: "Hybrid Fine-Tuning on Large Language Models (LLMs)",
    image: project3,
    description:
      "Pioneered a hybrid fine-tuning approach combining LoRA and prompt tuning to optimize large language model performance while reducing computational demands. Validated the methodology through ablation studies and model interpretation techniques, providing insights into decision-making processes for diverse NLP tasks.",
    technologies: ["Python", "LLM", "PyTorch", "HuggingFace", "LoRA"],
    link: "https://github.com/shahinkm/Hybrid-LoRA-and-Prompt-Tuning",
  },
  {
    title: "Multi-Label Classification in Fashion Imagery",
    image: project4,
    description:
      "Adapted a Swin Transformer-based Query2Label architecture for multi-label garment attribute classification, achieving a mean class accuracy of 72.66% on the test dataset. Implemented strategies like class-weighted categorical cross-entropy and data augmentation to address class imbalance and enhance model generalization on unseen data.",
    technologies: ["Python", "Computer Vision", "PyTorch"],
    link: "https://github.com/shahinkm/Fashion-Attributes-Classification",
  },
];

export const CONTACT = {
  email: "shahinshahkm@gmail.com",
};
