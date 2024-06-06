import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
  {
    title: "Smells Like Teen Spirit by Nirvana",
    description:
      "A defining anthem of the grunge movement, known for its raw energy and Kurt Cobain's gritty vocals. The song's explosive chorus and rebellious spirit resonate with generations of listeners.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVKrUdKD9KeXDP0JvnQdmofg-6qEb1gOj1g&s",
  },
  {
    title: "Bohemian Rhapsody by Queen",
    description:
      "A groundbreaking rock opera that blends multiple musical styles, including ballad, opera, and hard rock. Freddie Mercury's powerful vocals and the song's intricate composition make it a timeless classic.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2h3Sb0glUTLk_Iszsk9oKmmXvMFEeWxpsg&s",
  },
  {
    title: "Billie Jean by Michael Jackson",
    description:
      "A defining track of the 1980s, featuring a distinctive bass line and Jackson's iconic vocals. The song's themes of infidelity and identity are complemented by its groundbreaking music video.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7E8jMNmNwhGY9hIdufKIje2Oar5ExKZu0yg&s",
  },
  {
    title: "Imagine by John Lennon",
    description:
      "A poignant call for peace and unity, encouraging listeners to envision a world without barriers. Its simple yet profound lyrics and melody have made it an enduring anthem for social change.",
    imgUrl: "https://i1.sndcdn.com/artworks-000025899674-78ld76-t500x500.jpg",
  },
  {
    title: "Like a Rolling Stone by Bob Dylan",
    description:
      "A transformative song in the world of rock music, blending poetic lyrics with a driving beat. Dylan's reflective narrative captures themes of loss and self-discovery.",
    imgUrl:
      "https://jambands.com/wp-content/uploads/2013/11/Bob_Dylan_-_Like_a_Rolling_Stone.jpg",
  },
];

const Sidebar = () => (
  <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
    <div>
      <div className="logoDiv p-6">
        <img src={spotify_logo} alt="Spotify Logo" width={125} />
      </div>
      <div className="py-5">
        <IconText iconName={"material-symbols:home"} displayText={"Home"} />
        <IconText iconName={"material-symbols:search"} displayText={"Search"} />
        <IconText
          iconName={"clarity:library-solid"}
          displayText={"Your Library"}
        />
      </div>
      <div className="pt-5">
        <IconText
          iconName={"icon-park-solid:add"}
          displayText={"Create Playlist"}
        />
        <IconText iconName={"mdi:heart-box"} displayText={"Liked Songs"} />
      </div>
    </div>
    <div className="px-5">
      <div className="border border-gray-100 text-white w-1/4 rounded-full flex px-2 py-1 items-center justify-center hover:border-white cursor-pointer">
        <Icon icon="gravity-ui:globe" />
        <div className="ml-2 text-sm font-semibold">English</div>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <div className="navbar w-full h-1/6 bg-black bg-opacity-50 flex items-center justify-end">
    <div className="w-1/2 flex justify-between">
      <div className="w-3/5 flex justify-around items-center">
        <TextWithHover displayText={"Premium"} />
        <TextWithHover displayText={"Support"} />
        <TextWithHover displayText={"Download"} />
        <div className="h-1/2 border-r border-white"></div>
      </div>
      <div className="w-2/5 flex justify-around h-full items-center">
        <TextWithHover displayText={"Sign up"} />
        <div className="bg-white h-2/30 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
          Log in
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <Navbar />
        <div className="content p-8 pt-0 overflow-auto">
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView
            titleText="Spotify Playlist"
            cardsData={focusCardsData}
          />
          <PlaylistView titleText="Sound of India" cardsData={focusCardsData} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 px-4 py-2 rounded-lg">
      <div className="py-4">
        <img className="w-full rounded-md" src={imgUrl} alt={title} />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
