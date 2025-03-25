import React from 'react'; // ✅ Removed duplicate import
import { Container } from 'react-bootstrap'; // ✅ Removed unnecessary Row and Col imports
import BlogPost from './BlogPost';
import img1 from '../images/hero-banner.jpg';
import img2 from '../images/hero-banner-2.jpg';
import img3 from "../images/img-1.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Natural Light Photography",
    description: "Learn how to use natural light effectively for stunning photos. Discover the best times of the day, techniques for soft and harsh lighting, and how to create depth and mood in your shots. Perfect for portrait, landscape, and street photography enthusiasts looking to enhance their skills.",
    image: img1,
  },
  {
    id: 2,
    title: "Essential Camera Settings for Beginners",
    description: "Master the fundamental camera settings, including ISO, shutter speed, and aperture, to take perfect shots in any situation. Understand how these settings work together, when to use manual mode, and tips for capturing sharp, well-exposed images in different lighting conditions. Ideal for new photographers learning camera basics.",
    image: img2,
  },
  {
    id: 3,
    title: "Top 10 Photography Composition Tips",
    description: "Improve your photography with essential composition techniques like the rule of thirds, leading lines, symmetry, and framing. Learn how to balance your images, create depth, and draw the viewer’s attention to your subject. These tips will help you capture visually appealing and professional-looking photos every time.",
    image: img3,
  },
  {
    id: 4,
    title: "A Guide to Portrait Photography",
    description: "Capture stunning portraits with expert tips on lighting, posing, and background selection. Learn how to make your subject feel comfortable, use natural or artificial light effectively, and frame your shots for professional-quality images. Whether shooting indoors or outdoors, these techniques will elevate your portrait photography skills.",
    image: img4,
  },
  {
    id: 5,
    title: "How to Edit Photos Like a Pro",
    description: "Enhance your photos using professional editing techniques in Adobe Lightroom and Photoshop. Learn how to adjust exposure, colors, sharpness, and remove distractions to create stunning final images. This guide covers essential tools, presets, and workflow strategies to help photographers refine their work and develop a unique editing style.",
    image: img5,
  },
];


const Blog = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Latest Blog Posts</h2>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Blog;
