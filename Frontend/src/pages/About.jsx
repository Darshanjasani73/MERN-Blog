// import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="flex flex-col"> 
          <h1 className="text-4xl font font-semibold text-center my-7">
            About Darshan&apos;s Blog
          </h1>
          <div className="text-xl text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to DJ&apos;s Blog! This blog was created by Darshan Jasani
              as a personal project to Showcase his skills in full stack web 
              development by using React, NodeJs, ExpressJs, MongoDB as a database. 
              Darshan is a passionate developer who loves coding.
            </p>

            <p>This is a blog application with admin dashboard Where Only admin can create a blog and user can read it. 
              Other users can add, delete and update the comments. Other users can like the comment on posts of other&apos;s post. 
              Users can create their account by using Google OAuth as well. User can upload their Profile picture they can delete their account and user can update their Credentials they can sign in sign out.</p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. We believe that a community of learners can help
              each other grow and improve.
            </p>
            <p>Developed by Darshan Jasani, with ♥️ and enthusiasm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
