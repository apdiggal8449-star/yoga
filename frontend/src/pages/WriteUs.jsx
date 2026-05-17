import React from "react";

const WriteForUs = () => {
  return (
    <section className="bg-[#f8f5f1] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-5 sm:p-8 lg:p-12">

        {/* Heading */}
        <div className="text-center border-b border-gray-300 pb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7b2d26]">
            Write for Us – Yoga, Health & Wellness
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 italic">
            Share your wisdom. Inspire our community. Grow your voice.
          </p>
        </div>

        {/* Intro */}
        <div className="mt-8 space-y-5 text-gray-700 leading-7 text-sm sm:text-base">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-[#7b2d26]">
              Omyogshala
            </span>
            . We are a premier digital destination dedicated to Yoga,
            Holistic Health, and Spiritual Wellness.
          </p>

          <p>
            We invite certified yoga teachers, wellness practitioners,
            nutritionists, and passionate writers to contribute
            high-quality guest posts.
          </p>
        </div>

        {/* Why Write */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#7b2d26] mb-5">
            Why Write for Omyogshala?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Reach a targeted audience interested in health & yoga.",
              "Build your authority and online presence.",
              "Get exposure through social media and newsletters.",
              "Earn a valuable backlink to your website.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#f8f5f1] p-4 rounded-xl border border-gray-200"
              >
                <span className="text-green-600 text-lg">✔</span>
                <p className="text-sm sm:text-base text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#7b2d26] mb-5">
            Topics We Cover
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Yoga Asanas & Philosophy",
              "Meditation & Mindfulness",
              "Spirituality",
              "Ayurveda",
              "Health & Nutrition",
              "Fitness & Recovery",
              "Home Remedies",
              "Mental Wellness",
            ].map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-green-500 text-green-700 text-sm bg-green-50 hover:bg-green-100 transition"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#7b2d26] mb-5">
            Submission Guidelines
          </h2>

          {/* Note Box */}
          <div className="bg-[#fff3e6] border-l-4 border-orange-500 p-5 rounded-lg mb-8">
            <h3 className="font-bold text-orange-700 text-lg">
              ⚠ IMPORTANT
            </h3>

            <p className="mt-2 text-gray-700 text-sm sm:text-base leading-7">
              We do not accept content that is 100% AI generated
              without human editing. Content must be user-friendly,
              engaging, and written for people.
            </p>
          </div>

          {/* Content Quality */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#7b2d26] mb-4">
              1. Content Quality & Style
            </h3>

            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                Word Count: Minimum 1000 words preferred.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                Use proper formatting with headings & short paragraphs.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600">✔</span>
                Content must be original and plagiarism-free.
              </li>
            </ul>
          </div>

          {/* Linking */}
          <div className="bg-[#eef6ff] p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-[#7b2d26] mb-4">
              🔗 Linking Requirements
            </h3>

            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-blue-600">✔</span>
                Include at least 1 internal link to Omyogshala.
              </li>

              <li className="flex gap-3">
                <span className="text-blue-600">✔</span>
                Add 1-2 trusted external references.
              </li>

              <li className="flex gap-3">
                <span className="text-blue-600">✔</span>
                One relevant do-follow backlink allowed.
              </li>
            </ul>
          </div>
        </div>

        {/* Images */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#7b2d26] mb-5">
            Images & Media
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
            <li className="flex gap-3">
              <span className="text-green-600">✔</span>
              Use at least one copyright-free high quality image.
            </li>

            <li className="flex gap-3">
              <span className="text-green-600">✔</span>
              Ensure images are clear and technically correct.
            </li>
          </ul>
        </div>
           
            {/* Ready To Submit */}
<div className="mt-12">
  <div className="bg-[#edf6ed] border-2 border-dashed border-green-500 rounded-2xl px-6 py-10 sm:px-10 text-center">

    <h2 className="text-2xl sm:text-3xl font-bold text-[#6b2b22]">
      Ready to Submit?
    </h2>

    <p className="mt-5 text-gray-700 text-sm sm:text-base leading-7">
      Send your topic ideas or completed draft
      (Google Doc preferred) to our editorial team:
    </p>

    <h3 className="mt-6 text-2xl sm:text-4xl font-bold text-[#6b2b22] break-all">
      omyogshalain@gmail.com
    </h3>

    <p className="mt-6 text-gray-700 italic text-sm sm:text-base">
      Subject Line:
      <span className="font-medium">
        {" "}
        "Guest Post Submission - [Your Topic]"
      </span>
    </p>

    <p className="mt-8 text-gray-500 text-xs sm:text-sm leading-6">
      *We aim to reply within 3-5 business days.
      We reserve the right to edit content for SEO,
      clarity, and link placement.*
    </p>

  </div>
</div>
      </div>
    </section>
  );
};

export default WriteForUs;