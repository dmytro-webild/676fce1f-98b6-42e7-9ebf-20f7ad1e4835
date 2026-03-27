"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Petite Dejeuner"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="The Happy Side of Breakfast, Elevated"
      description="Indulge in handcrafted breakfasts, fresh juices, and premium comfort meals in the heart of Accra."
      kpis={[
        {
          value: "100%",
          label: "Fresh Ingredients",
        },
        {
          value: "Premium",
          label: "Café Experience",
        },
        {
          value: "Daily",
          label: "Handcrafted Meals",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "View Menu",
          href: "#products",
        },
        {
          text: "Visit Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/food-drinks_1122-1812.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Luxury Breakfast Experience in Accra",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/top-view-cup-coffee-with-cookies-cotton-flowers_23-2148720030.jpg",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Breakfast Platter",
          price: "GH₵200",
          variant: "Full spread",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cow-tongue-salad-with-mayonnaise-lettuce-arugula-leaves-plate-with-tomatoes-cucumber-soft-drink-table_141793-2823.jpg",
        },
        {
          id: "p2",
          name: "Chicken & Waffles",
          price: "GH₵85",
          variant: "Crispy & Golden",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-waffle-cakes-with-new-year-tree-toys-light-background-sweet-pie-cream-dessert-cake_140725-141755.jpg",
        },
        {
          id: "p3",
          name: "French Toast Meal",
          price: "GH₵80",
          variant: "Classic luxury",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bread-with-cream-cheese-fruits-plate-with-honey_23-2148749098.jpg",
        },
      ]}
      title="Signature Dishes"
      description="Indulge in our most loved, beautifully plated morning favorites."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Best breakfast spot in Accra. Everything tastes premium. Their waffles are unreal. Perfect brunch vibe and amazing service."
      rating={5}
      author="Sarah Johnson"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pretty-young-model-student-girl-dressed-up-casual-clothes-jeans-cafe-holds-coffee-tea-cup-her-hands_231208-5216.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman_1303-3880.jpg",
          alt: "Michael",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman_23-2148537356.jpg",
          alt: "Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-smiley-women-spending-time-indoors_23-2150176902.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-young-model-student-girl-dressed-up-casual-clothes-jeans-cafe-holds-coffee-tea-cup-her-hands_231208-5216.jpg",
          alt: "Customer",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Visit us at Odoi Beyeden Street, Accra, Ghana. Call us at +233 25 633 0029. Follow us for daily specials."
      buttons={[
        {
          text: "Order on WhatsApp",
          href: "https://wa.me/233256330029",
        },
        {
          text: "Visit Instagram",
          href: "https://www.instagram.com/petite_dejeuner",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Full Menu",
              href: "/menu",
            },
          ],
        },
        {
          title: "Location",
          items: [
            {
              label: "Odoi Beyeden Street, Accra",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Call +233 25 633 0029",
              href: "tel:+233256330029",
            },
          ],
        },
      ]}
      logoText="Petite Dejeuner"
      copyrightText="© 2025 Petite Dejeuner | All rights reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
