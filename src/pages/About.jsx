import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page bg-[#1F1E24] text-white p-6">
      <div className="container mx-auto space-y-4">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] mr-6  ri-arrow-left-fill text-white ri-2x"
        ></Link>
        <span className="text-4xl font-bold"> About Disney+ Hotstar</span>
        <p className="text-lg mb-4">
          Disney+ Hotstar is your go-to streaming destination for the best in TV
          shows, movies, live sports, and exclusive Hotstar Specials. Enjoy a
          vast library of Disney classics, Marvel superhero movies, Star Wars
          sagas, and much more, all in one place.
        </p>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Exclusive access to Disney, Pixar, Marvel, Star Wars, and National
            Geographic content.
          </li>
          <li>
            Hotstar Specials: Original shows and movies produced exclusively for
            Hotstar.
          </li>
          <li>Live sports streaming, including cricket, football, and more.</li>
          <li>Multiple languages and subtitles available.</li>
          <li>Personalized recommendations based on your viewing history.</li>
          <li>Download and watch offline.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Content Library</h2>
        <p className="text-lg mb-4">
          Disney+ Hotstar boasts an extensive content library, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Disney Classics: Enjoy timeless animated films like The Lion King,
            Beauty and the Beast, and Aladdin.
          </li>
          <li>
            Marvel Cinematic Universe: Watch all your favorite superhero movies
            and series.
          </li>
          <li>
            Star Wars: Explore the epic space saga from the original trilogy to
            the latest releases.
          </li>
          <li>
            National Geographic: Dive into fascinating documentaries about
            nature, science, and history.
          </li>
          <li>
            Hotstar Specials: Exclusive series and movies made just for you.
          </li>
          <li>
            Live Sports: Catch live broadcasts of cricket, football, tennis, and
            more.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
        <p className="text-lg mb-4">
          Disney+ Hotstar offers flexible subscription plans to suit your needs.
          Choose from:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            VIP Plan: Access to live sports, Hotstar Specials, and dubbed
            content in multiple languages.
          </li>
          <li>
            Premium Plan: All the benefits of the VIP Plan plus access to the
            full Disney+ library, including the latest movies and series.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          If you have any questions or need assistance, feel free to reach out
          to our support team at support@hotstar.com.
        </p>
      </div>
    </div>
  );
};

export default About;
