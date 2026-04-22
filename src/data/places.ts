export interface Place {
	img: string;
	country: string;
	place: string;
	price: string;
	rating: '4.0' | '5.0';
}

export interface RegionTab {
	id: string;
	label: string;
	folder: string;
	items: Place[];
}

export const regionTabs: RegionTab[] = [
	{
		id: 'world',
		label: 'World',
		folder: 'world',
		items: [
			{ img: 'place-1.webp', country: 'Maldives', place: 'Baa Atoll', price: '$2,400', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Japan', place: 'Kyoto', price: '$1,800', rating: '5.0' },
			{ img: 'place-3.webp', country: 'Peru', place: 'Machu Picchu', price: '$2,100', rating: '5.0' },
			{ img: 'place-4.webp', country: 'Iceland', place: 'Reykjavik', price: '$1,600', rating: '4.0' },
			{ img: 'place-5.webp', country: 'Tanzania', place: 'Serengeti', price: '$3,200', rating: '5.0' },
			{ img: 'place-6.webp', country: 'Norway', place: 'Fjordland', price: '$1,900', rating: '4.0' },
			{ img: 'place-7.webp', country: 'Thailand', place: 'Koh Samui', price: '$1,200', rating: '4.0' },
			{ img: 'place-8.webp', country: 'Egypt', place: 'Luxor', price: '$950', rating: '4.0' },
			{ img: 'place-9.webp', country: 'Brazil', place: 'Amazon', price: '$2,600', rating: '5.0' },
			{ img: 'place-10.webp', country: 'India', place: 'Rajasthan', price: '$1,100', rating: '4.0' },
			{ img: 'place-11.webp', country: 'Greece', place: 'Santorini', price: '$1,700', rating: '5.0' },
			{ img: 'place-12.webp', country: 'Morocco', place: 'Marrakech', price: '$890', rating: '4.0' },
		],
	},
	{
		id: 'russia',
		label: 'Russia',
		folder: 'russia',
		items: [
			{ img: 'place-1.webp', country: 'Russia', place: 'Lake Baikal', price: '$800', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Russia', place: 'Kamchatka', price: '$1,400', rating: '5.0' },
			{ img: 'place-3.webp', country: 'Russia', place: 'Altai', price: '$700', rating: '4.0' },
			{ img: 'place-4.webp', country: 'Russia', place: 'Karelia', price: '$600', rating: '4.0' },
			{ img: 'place-5.webp', country: 'Russia', place: 'Sochi', price: '$550', rating: '4.0' },
			{ img: 'place-6.webp', country: 'Russia', place: 'Vladivostok', price: '$750', rating: '4.0' },
			{ img: 'place-7.webp', country: 'Russia', place: 'Elbrus', price: '$900', rating: '5.0' },
			{ img: 'place-8.webp', country: 'Russia', place: 'Kola Peninsula', price: '$1,100', rating: '5.0' },
			{ img: 'place-9.webp', country: 'Russia', place: 'Sakhalin', price: '$1,200', rating: '4.0' },
			{ img: 'place-10.webp', country: 'Russia', place: 'Yakutia', price: '$1,300', rating: '4.0' },
			{ img: 'place-11.webp', country: 'Russia', place: 'Caucasus', price: '$850', rating: '5.0' },
			{ img: 'place-12.webp', country: 'Russia', place: 'White Sea', price: '$950', rating: '4.0' },
		],
	},
	{
		id: 'asia',
		label: 'Asia',
		folder: 'asia',
		items: [
			{ img: 'place-1.webp', country: 'Bali', place: 'Ubud', price: '$1,100', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Vietnam', place: 'Ha Long Bay', price: '$980', rating: '5.0' },
			{ img: 'place-3.webp', country: 'Nepal', place: 'Everest Base Camp', price: '$2,200', rating: '5.0' },
			{ img: 'place-4.webp', country: 'Thailand', place: 'Chiang Mai', price: '$850', rating: '4.0' },
			{ img: 'place-5.webp', country: 'Sri Lanka', place: 'Sigiriya', price: '$1,050', rating: '4.0' },
			{ img: 'place-6.webp', country: 'Cambodia', place: 'Angkor Wat', price: '$900', rating: '5.0' },
			{ img: 'place-7.webp', country: 'Myanmar', place: 'Bagan', price: '$1,150', rating: '5.0' },
			{ img: 'place-8.webp', country: 'China', place: 'Zhangjiajie', price: '$1,300', rating: '4.0' },
			{ img: 'place-9.webp', country: 'Japan', place: 'Hokkaido', price: '$1,800', rating: '5.0' },
			{ img: 'place-10.webp', country: 'Philippines', place: 'Palawan', price: '$1,200', rating: '5.0' },
			{ img: 'place-11.webp', country: 'Laos', place: 'Luang Prabang', price: '$750', rating: '4.0' },
			{ img: 'place-12.webp', country: 'Mongolia', place: 'Gobi Desert', price: '$1,600', rating: '4.0' },
		],
	},
	{
		id: 'africa',
		label: 'Africa',
		folder: 'africa',
		items: [
			{ img: 'place-1.webp', country: 'Kenya', place: 'Masai Mara', price: '$3,100', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Tanzania', place: 'Kilimanjaro', price: '$2,800', rating: '5.0' },
			{ img: 'place-3.webp', country: 'South Africa', place: 'Cape Town', price: '$1,500', rating: '5.0' },
			{ img: 'place-4.webp', country: 'Morocco', place: 'Sahara Desert', price: '$1,200', rating: '4.0' },
			{ img: 'place-5.webp', country: 'Botswana', place: 'Okavango Delta', price: '$4,200', rating: '5.0' },
			{ img: 'place-6.webp', country: 'Namibia', place: 'Sossusvlei', price: '$2,300', rating: '5.0' },
			{ img: 'place-7.webp', country: 'Ethiopia', place: 'Lalibela', price: '$1,100', rating: '4.0' },
			{ img: 'place-8.webp', country: 'Rwanda', place: 'Volcanoes NP', price: '$3,500', rating: '5.0' },
			{ img: 'place-9.webp', country: 'Madagascar', place: 'Avenue of Baobabs', price: '$1,800', rating: '4.0' },
			{ img: 'place-10.webp', country: 'Zanzibar', place: 'Stone Town', price: '$1,400', rating: '4.0' },
			{ img: 'place-11.webp', country: 'Zambia', place: 'Victoria Falls', price: '$2,100', rating: '5.0' },
			{ img: 'place-12.webp', country: 'Egypt', place: 'Siwa Oasis', price: '$950', rating: '4.0' },
		],
	},
	{
		id: 'europe',
		label: 'Europe',
		folder: 'europe',
		items: [
			{ img: 'place-1.webp', country: 'Italy', place: 'Amalfi Coast', price: '$1,900', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Switzerland', place: 'Grindelwald', price: '$2,400', rating: '5.0' },
			{ img: 'place-3.webp', country: 'Croatia', place: 'Dubrovnik', price: '$1,300', rating: '4.0' },
			{ img: 'place-4.webp', country: 'Scotland', place: 'Highlands', price: '$1,600', rating: '5.0' },
			{ img: 'place-5.webp', country: 'Portugal', place: 'Alentejo', price: '$1,100', rating: '4.0' },
			{ img: 'place-6.webp', country: 'Iceland', place: 'Westfjords', price: '$2,200', rating: '5.0' },
			{ img: 'place-7.webp', country: 'Norway', place: 'Lofoten', price: '$2,000', rating: '5.0' },
			{ img: 'place-8.webp', country: 'Slovenia', place: 'Lake Bled', price: '$1,050', rating: '4.0' },
			{ img: 'place-9.webp', country: 'Montenegro', place: 'Kotor', price: '$950', rating: '4.0' },
			{ img: 'place-10.webp', country: 'Georgia', place: 'Svaneti', price: '$800', rating: '5.0' },
			{ img: 'place-11.webp', country: 'Spain', place: 'Picos de Europa', price: '$1,200', rating: '4.0' },
			{ img: 'place-12.webp', country: 'Austria', place: 'Hallstatt', price: '$1,400', rating: '4.0' },
		],
	},
	{
		id: 'northAmerica',
		label: 'North America',
		folder: 'northAmerica',
		items: [
			{ img: 'place-1.webp', country: 'USA', place: 'Grand Canyon', price: '$1,200', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Canada', place: 'Banff', price: '$1,600', rating: '5.0' },
			{ img: 'place-3.webp', country: 'Mexico', place: 'Yucatan', price: '$1,000', rating: '4.0' },
			{ img: 'place-4.webp', country: 'USA', place: 'Yellowstone', price: '$1,400', rating: '5.0' },
			{ img: 'place-5.webp', country: 'Canada', place: 'Yukon', price: '$2,100', rating: '5.0' },
			{ img: 'place-6.webp', country: 'USA', place: 'Zion NP', price: '$1,100', rating: '4.0' },
			{ img: 'place-7.webp', country: 'Mexico', place: 'Copper Canyon', price: '$1,300', rating: '4.0' },
			{ img: 'place-8.webp', country: 'USA', place: 'Hawaii', price: '$2,200', rating: '5.0' },
			{ img: 'place-9.webp', country: 'Canada', place: 'Newfoundland', price: '$1,500', rating: '4.0' },
			{ img: 'place-10.webp', country: 'USA', place: 'Alaska', price: '$2,800', rating: '5.0' },
			{ img: 'place-11.webp', country: 'Belize', place: 'Great Blue Hole', price: '$1,900', rating: '5.0' },
			{ img: 'place-12.webp', country: 'Cuba', place: 'Viñales', price: '$850', rating: '4.0' },
		],
	},
	{
		id: 'australia',
		label: 'Australia',
		folder: 'australia',
		items: [
			{ img: 'place-1.webp', country: 'Australia', place: 'Great Barrier Reef', price: '$2,300', rating: '5.0' },
			{ img: 'place-2.webp', country: 'Australia', place: 'Uluru', price: '$1,800', rating: '5.0' },
			{ img: 'place-3.webp', country: 'New Zealand', place: 'Fiordland', price: '$2,100', rating: '5.0' },
			{ img: 'place-4.webp', country: 'Australia', place: 'Kimberley', price: '$2,600', rating: '5.0' },
			{ img: 'place-5.webp', country: 'New Zealand', place: 'Rotorua', price: '$1,400', rating: '4.0' },
			{ img: 'place-6.webp', country: 'Australia', place: 'Tasmania', price: '$1,600', rating: '4.0' },
			{ img: 'place-7.webp', country: 'Fiji', place: 'Yasawa Islands', price: '$2,400', rating: '5.0' },
			{ img: 'place-8.webp', country: 'Australia', place: 'Daintree', price: '$1,300', rating: '4.0' },
			{ img: 'place-9.webp', country: 'New Zealand', place: 'Abel Tasman', price: '$1,700', rating: '5.0' },
			{ img: 'place-10.webp', country: 'Australia', place: 'Whitsundays', price: '$2,000', rating: '5.0' },
			{ img: 'place-11.webp', country: 'Papua New Guinea', place: 'Tufi', price: '$1,900', rating: '4.0' },
			{ img: 'place-12.webp', country: 'Australia', place: 'Blue Mountains', price: '$950', rating: '4.0' },
		],
	},
];
