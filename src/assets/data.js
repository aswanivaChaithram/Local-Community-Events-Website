import fitness1 from '../assets/fitness1.jpeg';
import fitness2 from '../assets/fitness2.jpeg';
import music1 from '../assets/music1.jpeg';
import music2 from '../assets/music2.jpeg';
import music3 from '../assets/music3.jpeg';
import meetup1 from '../assets/meetup1.jpeg';
import meetup2 from '../assets/meetup2.jpeg';
import meetup3 from '../assets/meetup3.jpeg';
import meetup4 from '../assets/meetup4.jpeg';
import workshop1 from '../assets/work1.jpeg';
import workshop2 from '../assets/work2.jpeg';
import workshop3 from '../assets/work3.jpeg';
import workshop4 from '../assets/work4.jpeg';
import workshop5 from '../assets/work5.jpeg';
import sports1 from '../assets/sports1.jpeg';
import sports2 from '../assets/sports2.jpeg';
import sports3 from '../assets/sports3.jpeg';
import social from '../assets/social.jpeg';
import ente1 from '../assets/ente1.jpeg';
import ente2 from '../assets/ente2.jpeg';
import ente3 from '../assets/ente3.jpeg';

const eventsData = {
  "events": [
    {
      "id": 1,
      "title": "Community Yoga Session",
      "type": "Fitness",
      "date": "2025-08-20",
      "location": "Bangalore",
      "host": "Yoga with Anu",
      "description": "Join us for a peaceful yoga session in Cubbon Park.",
      "image": fitness2
    },
    {
      "id": 2,
      "title": "Beginner Guitar Workshop",
      "type": "Music",
      "date": "2025-08-22",
      "location": "Mumbai",
      "host": "Strings Academy",
      "description": "Learn the basics of guitar playing with hands-on guidance.",
        "image": music1
    },
    {
      "id": 3,
      "title": "Startup Networking Meetup",
      "type": "Meetup",
      "date": "2025-08-25",
      "location": "Delhi",
      "host": "Delhi Entrepreneurs Club",
      "description": "Meet fellow entrepreneurs, pitch ideas, and network.",
        "image": meetup3
    },
    {
      "id": 4,
      "title": "Digital Marketing Seminar",
      "type": "Workshop",
      "date": "2025-08-28",
      "location": "Hyderabad",
      "host": "Marketing Gurus",
      "description": "Learn the latest trends and strategies in digital marketing.",
        "image": workshop4
    },
    {
      "id": 5,
      "title": "Weekend Trek to Nandi Hills",
      "type": "Sports",
      "date": "2025-08-30",
      "location": "Bangalore",
      "host": "Adventure Trails",
      "description": "An early morning trek to Nandi Hills followed by breakfast.",
        "image": sports3
    },
    {
      "id": 6,
      "title": "Art & Craft for Kids",
      "type": "Workshop",
      "date": "2025-09-01",
      "location": "Pune",
      "host": "Creative Hands",
      "description": "Fun and educational art activities for children aged 6–12.",
      "image": workshop5
    },
    {
      "id": 7,
      "title": "City Photography Walk",
      "type": "Meetup",
      "date": "2025-09-03",
      "location": "Chennai",
      "host": "Lens Lovers Club",
      "description": "Explore the city while improving your photography skills.",
      "image": meetup4
    },
    {
      "id": 8,
      "title": "Cooking Masterclass: Italian Cuisine",
      "type": "Workshop",
      "date": "2025-09-05",
      "location": "Kolkata",
      "host": "Chef Maria",
      "description": "Learn to cook authentic Italian dishes from scratch.",
      "image": workshop1
    },
    {
      "id": 9,
      "title": "Live Jazz Night",
      "type": "Music",
      "date": "2025-09-07",
      "location": "Goa",
      "host": "Goa Jazz Club",
      "description": "An evening of live jazz performances by local musicians.",
      "image": music3
    },
    {
      "id": 10,
      "title": "Community Beach Cleanup",
      "type": "Social",
      "date": "2025-09-10",
      "location": "Mumbai",
      "host": "Eco Warriors",
      "description": "Join us in cleaning up Juhu Beach and making a difference.",
      "image": social
    },
    {
      "id": 11,
      "title": "Stand-up Comedy Night",
      "type": "Entertainment",
      "date": "2025-09-12",
      "location": "Bangalore",
      "host": "Laugh Out Loud",
      "description": "A night full of laughter with top stand-up comedians.",
      "image": ente1
    },
    {
      "id": 12,
      "title": "Chess Tournament",
      "type": "Sports",
      "date": "2025-09-14",
      "location": "Delhi",
      "host": "Delhi Chess Club",
      "description": "Compete with fellow chess enthusiasts for exciting prizes.",
      "image": sports2
    },
    {
      "id": 13,
      "title": "Mindfulness Meditation Retreat",
      "type": "Fitness",
      "date": "2025-09-16",
      "location": "Rishikesh",
      "host": "Peaceful Minds",
      "description": "A weekend retreat to practice mindfulness and meditation.",
      "image": fitness1
    },
    {
      "id": 14,
      "title": "Blockchain for Beginners",
      "type": "Workshop",
      "date": "2025-09-18",
      "location": "Pune",
      "host": "TechLearn Hub",
      "description": "Understand the basics of blockchain and its applications.",
      "image": workshop2
    },
    {
      "id": 15,
      "title": "Bird Watching Morning",
      "type": "Meetup",
      "date": "2025-09-20",
      "location": "Jaipur",
      "host": "Nature Explorers",
      "description": "Join us to spot and learn about local bird species.",
      "image": meetup1
    },
    {
      "id": 16,
      "title": "Poetry Open Mic",
      "type": "Entertainment",
      "date": "2025-09-22",
      "location": "Chandigarh",
      "host": "Words & Verses",
      "description": "An evening for poets to share their work with the community.",
      "image": ente2
    },
    {
      "id": 17,
      "title": "DIY Home Gardening Workshop",
      "type": "Workshop",
      "date": "2025-09-24",
      "location": "Ahmedabad",
      "host": "Green Thumbs",
      "description": "Learn how to start and maintain your own home garden.",
      "image": workshop3
    },
    {
      "id": 18,
      "title": "Marathon for Charity",
      "type": "Sports",
      "date": "2025-09-26",
      "location": "Kochi",
      "host": "Run for Cause",
      "description": "Participate in a marathon to raise funds for charity.",
      "image": sports1
    },
    {
      "id": 19,
      "title": "Language Exchange Meetup",
      "type": "Meetup",
      "date": "2025-09-28",
      "location": "Bangalore",
      "host": "Global Friends",
      "description": "Practice languages and make friends from different cultures.",
      "image": meetup2
    },
    {
      "id": 20,
      "title": "Film Screening: Indie Shorts",
      "type": "Entertainment",
      "date": "2025-09-30",
      "location": "Mumbai",
      "host": "Cinephiles Club",
      "description": "An evening of short films by independent filmmakers.",
      "image": ente3
    }
  ]
};

export default eventsData;
