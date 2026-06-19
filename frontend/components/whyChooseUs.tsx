export default function WhyChooseUs() {
  const features = [
    {
      icon: "🌿",
      title: "Eco-Friendly Stay",
      description:
        "Experience sustainable living surrounded by nature and fresh mountain air.",
    },
    {
      icon: "🏔️",
      title: "Mountain Views",
      description:
        "Wake up to breathtaking Himalayan views right from your room.",
    },
    {
      icon: "🍽️",
      title: "Local Cuisine",
      description:
        "Enjoy delicious home-cooked meals prepared with local ingredients.",
    },
    {
      icon: "🔥",
      title: "Bonfire Experience",
      description:
        "Spend memorable evenings around a cozy bonfire under the stars.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover a unique blend of comfort, nature, and hospitality at
          Trishul Eco Homestays.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}