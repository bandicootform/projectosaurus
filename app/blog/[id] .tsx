'use client';

import { useRouter } from 'next/router';

const posts = [
  {
    id: 1,
    title: 'Journey to Minimalist Design: Lessons Learned',
    date: '2025-01-01',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-8">Introduction</h2>
        <p className="mb-4">
          Minimalist design has become a cornerstone of modern graphic design. 
          In this article, I’ll share my journey into adopting minimalism and the lessons I learned along the way.
        </p>
        <h3 className="text-2xl font-semibold mt-6">What is Minimalist Design?</h3>
        <p className="mb-4">
          Minimalist design emphasizes simplicity and the removal of unnecessary elements. 
          By focusing on essential details, it creates a clean and impactful experience for the viewer.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Challenges in Adopting Minimalism</h3>
        <p className="mb-4">
          Initially, it was challenging to eliminate elements I considered vital. 
          Over time, I learned to prioritize whitespace, focus on typography, and balance visual hierarchy.
        </p>
        <h2 className="text-3xl font-semibold mt-8">Conclusion</h2>
        <p className="mb-4">
          Minimalist design taught me to think critically about every element in my work. 
          It’s not just about aesthetics but also about clarity and purpose.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'My First Website with Next.js: A Beginner’s Experience',
    date: '2025-01-02',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-8">Getting Started with Next.js</h2>
        <p className="mb-4">
          Building my first website with Next.js was both exciting and challenging. 
          This article explores my step-by-step journey, including the tools I used and the obstacles I faced.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Why Next.js?</h3>
        <p className="mb-4">
          Next.js offers server-side rendering, static site generation, and a seamless development experience, 
          making it perfect for building fast and SEO-friendly websites.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Learning Curve</h3>
        <p className="mb-4">
          As someone with limited JavaScript experience, learning Next.js required patience. 
          I relied heavily on documentation and online tutorials to understand its routing system and API integrations.
        </p>
        <h2 className="text-3xl font-semibold mt-8">Key Takeaways</h2>
        <p className="mb-4">
          Using Next.js has not only enhanced my web development skills but also taught me the value of structured workflows. 
          I’m now more confident in creating scalable and maintainable projects.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Typography Experiments: From Sketches to Digital',
    date: '2025-01-03',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-8">Why Typography Matters</h2>
        <p className="mb-4">
          Typography is more than just fonts. It’s a powerful design tool that shapes how content is perceived. 
          Here, I’ll share my creative process, from hand-drawn sketches to digital typography.
        </p>
        <h3 className="text-2xl font-semibold mt-6">The Sketching Phase</h3>
        <p className="mb-4">
          Every typography project starts with a pencil and paper. Sketching allows me to explore shapes, 
          proportions, and styles before digitizing them.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Bringing Ideas to Life</h3>
        <p className="mb-4">
          Using tools like Adobe Illustrator, I refine my sketches, experiment with kerning, and adjust line weights 
          to ensure visual balance and readability.
        </p>
        <h2 className="text-3xl font-semibold mt-8">Final Thoughts</h2>
        <p className="mb-4">
          Typography is a dynamic field that constantly challenges me to push creative boundaries. 
          Every project is an opportunity to tell a story through letters and shapes.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Challenges in Combining Design and Functionality',
    date: '2025-01-04',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-8">Balancing Aesthetics and Usability</h2>
        <p className="mb-4">
          As a designer, one of the biggest challenges is finding the sweet spot between creativity and functionality. 
          Here, I’ll discuss the lessons I’ve learned while tackling this challenge.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Understanding User Needs</h3>
        <p className="mb-4">
          Good design starts with understanding the user. Interviews, surveys, and user testing help me identify pain points 
          and create designs that address them.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Iterative Design Process</h3>
        <p className="mb-4">
          Design is an iterative process. Prototyping and gathering feedback allow me to refine concepts and ensure both 
          aesthetics and usability are achieved.
        </p>
        <h2 className="text-3xl font-semibold mt-8">Conclusion</h2>
        <p className="mb-4">
          Combining design and functionality is a never-ending journey of learning and adapting. 
          It’s what makes design so rewarding and impactful.
        </p>
      </>
    ),
  },
];

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === parseInt(id as string));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Blog not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 pt-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-8">{post.date}</p>
      <div className="text-lg leading-relaxed">{post.content}</div>
    </div>
  );
}
