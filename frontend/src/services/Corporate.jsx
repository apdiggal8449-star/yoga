import React from "react";

export default function CorporateYoga() {
  return (
    <div className="bg-[#f4f0ec] min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-[#efe3d8] py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-[#ef6c00] font-semibold mb-3">
              Corporate Yoga Trainer for Delhi, Noida & Gurgaon
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#222] mb-5">
              Bring Calm to Your Office — One Session at a Time
            </h1>

            <p className="text-[#555] leading-8 text-[16px] mb-6">
              Improve employee wellness, reduce stress, and increase workplace
              productivity with professional corporate yoga sessions tailored
              for modern offices.
            </p>

            <button className="bg-green-500 hover:bg-green-600 transition text-white px-7 py-3 rounded-md font-semibold">
              Connect Whatsapp
            </button>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-lg border border-orange-200 p-7 shadow-sm">

            <h2 className="text-2xl font-bold text-[#ef6c00] mb-6">
              Connect With Om Yogshala
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-orange-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-orange-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-orange-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-orange-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
              ></textarea>

              <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
                Submit Inquiry
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* WHY COMPANIES SECTION */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">

            <h2 className="text-[28px] md:text-[34px] font-bold text-[#ef6c00] mb-2">
              Why Companies in Delhi NCR Choose Corporate Yoga
            </h2>

            <p className="text-[14px] text-[#6b6b6b] leading-7 max-w-3xl mx-auto">
              Studies show that over 76% of Indian professionals carry chronic
              stress symptoms. In high-pressure tech parks across Gurgaon and
              Noida, this has become visible. Corporate wellness is now a vital
              driver for corporate productivity.
            </p>

          </div>

          {/* cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <div className="text-orange-500 text-xl mb-3">👥</div>

              <h3 className="font-bold text-[15px] text-[#ef6c00] mb-2">
                Cut Sick Days
              </h3>

              <p className="text-[13px] leading-6 text-[#555]">
                Reduce common employee health pain points such as stress,
                migraines, and office-related fatigue.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <div className="text-orange-500 text-xl mb-3">💡</div>

              <h3 className="font-bold text-[15px] text-[#ef6c00] mb-2">
                Improve Focus
              </h3>

              <p className="text-[13px] leading-6 text-[#555]">
                Enhance mental clarity and attention so meetings remain sharper
                and decisions are better.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <div className="text-orange-500 text-xl mb-3">🧘</div>

              <h3 className="font-bold text-[15px] text-[#ef6c00] mb-2">
                Reduce Tension
              </h3>

              <p className="text-[13px] leading-6 text-[#555]">
                Relieve physical stiffness in the neck/shoulders and bring a
                calm atmosphere to team dynamics.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <div className="text-orange-500 text-xl mb-3">📈</div>

              <h3 className="font-bold text-[15px] text-[#ef6c00] mb-2">
                Retain Best Talent
              </h3>

              <p className="text-[13px] leading-6 text-[#555]">
                Demonstrating care via wellness programs creates a positive pull
                for team retention.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SESSION SECTION */}
      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="bg-[#f7f1eb] rounded-lg p-8">

            <div className="text-center mb-8">

              <h2 className="text-[28px] md:text-[34px] font-bold text-[#ef6c00] mb-2">
                What Our Corporate Yoga Sessions Look Like
              </h2>

              <p className="text-[14px] text-[#666] leading-7 max-w-3xl mx-auto">
                Our verified trainers specialize in adapting quickly to any
                workplace layout—boardrooms, terraces, or meeting areas.
              </p>

            </div>

            {/* top info */}
            <div className="grid grid-cols-2 lg:grid-cols-5 border border-orange-300 rounded-md overflow-hidden mb-6">

              <div className="border-r border-b lg:border-b-0 border-orange-300 p-4 text-center">
                <h4 className="text-[#ef6c00] font-bold text-[14px] mb-1">
                  Duration
                </h4>

                <p className="text-[13px] text-[#555]">
                  45 to 60 Mins
                </p>
              </div>

              <div className="border-r border-b lg:border-b-0 border-orange-300 p-4 text-center">
                <h4 className="text-[#ef6c00] font-bold text-[14px] mb-1">
                  Frequency
                </h4>

                <p className="text-[13px] text-[#555]">
                  Daily / Weekly
                </p>
              </div>

              <div className="border-r border-b lg:border-b-0 border-orange-300 p-4 text-center">
                <h4 className="text-[#ef6c00] font-bold text-[14px] mb-1">
                  Format
                </h4>

                <p className="text-[13px] text-[#555]">
                  On-site or Zoom
                </p>
              </div>

              <div className="border-r border-b lg:border-b-0 border-orange-300 p-4 text-center">
                <h4 className="text-[#ef6c00] font-bold text-[14px] mb-1">
                  Group Size
                </h4>

                <p className="text-[13px] text-[#555]">
                  5 to 50+ Employees
                </p>
              </div>

              <div className="p-4 text-center">
                <h4 className="text-[#ef6c00] font-bold text-[14px] mb-1">
                  Timing
                </h4>

                <p className="text-[13px] text-[#555]">
                  Flexible Hours
                </p>
              </div>

            </div>

            {/* session cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
                <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                  🪑 Desk Yoga & Chair Yoga
                </h3>

                <p className="text-[13px] text-[#555] leading-6">
                  Designed for prolonged desk sitting. Release tension from the
                  spine, shoulders and wrists.
                </p>
              </div>

              <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
                <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                  🌬️ Pranayama & Breathing
                </h3>

                <p className="text-[13px] text-[#555] leading-6">
                  Quick stress-release breathing protocols to lower stress and
                  reset a disturbed mind.
                </p>
              </div>

              <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
                <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                  🧠 Mindfulness & Stress Relief
                </h3>

                <p className="text-[13px] text-[#555] leading-6">
                  Guided relaxation and mindful movement for nervous system
                  relaxation.
                </p>
              </div>

              <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
                <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                  ⚡ Power Yoga for Active Teams
                </h3>

                <p className="text-[13px] text-[#555] leading-6">
                  Energetic and physically engaging sequences to build strength.
                </p>
              </div>

              <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
                <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                  🎯 Customized Care Sessions
                </h3>

                <p className="text-[13px] text-[#555] leading-6">
                  Perfectly curated classes specifically for mental health and
                  employee wellness.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">

            <h2 className="text-[28px] md:text-[34px] font-bold text-[#ef6c00] mb-2">
              Our Corporate Yoga Coverage — Delhi NCR
            </h2>

            <p className="text-[14px] text-[#666]">
              We deploy specialized wellness mentors directly across all key
              commercial sectors.
            </p>

          </div>

          <div className="border border-orange-300 rounded-md overflow-hidden bg-[#faf6f2]">

            <table className="w-full text-left border-collapse">

              <thead className="bg-[#f8efe7]">
                <tr>
                  <th className="border border-orange-300 px-4 py-3 text-[#ef6c00] text-sm">
                    Region
                  </th>

                  <th className="border border-orange-300 px-4 py-3 text-[#ef6c00] text-sm">
                    Corporate Centres Covered
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Delhi
                  </td>

                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Connaught Place, Saket, Okhla, Janakpuri, Nehru Place
                  </td>
                </tr>

                <tr>
                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Gurgaon
                  </td>

                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Cyber City, MG Road, Udyog Vihar, Golf Course Road
                  </td>
                </tr>

                <tr>
                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Noida
                  </td>

                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Sector 62, 63, 16, Film City, Expressway Zones
                  </td>
                </tr>

                <tr>
                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Greater Noida
                  </td>

                  <td className="border border-orange-300 px-4 py-3 text-sm">
                    Knowledge Park, Alpha, Beta, Omega sectors
                  </td>
                </tr>

              </tbody>

            </table>

            <div className="text-center text-[13px] py-3 text-[#ef6c00]">
              📍 Teams available across India.
            </div>

          </div>
        </div>
      </section>

      {/* WHY OM YOGSHALA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-8">

            <h2 className="text-[28px] md:text-[34px] font-bold text-[#ef6c00] mb-2">
              Why Om Yogshala for Corporate Wellness?
            </h2>

            <p className="text-[14px] text-[#666] leading-7">
              We remove the guesswork from B2B wellness activation by planning
              custom modules for your team.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                🟢 Certified Vetted Trainers
              </h3>

              <p className="text-[13px] text-[#555] leading-6">
                Every mentor holds accredited certifications and undergoes full
                background verification.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                🟢 Trainer Diversity
              </h3>

              <p className="text-[13px] text-[#555] leading-6">
                Expert male and female trainers available according to office
                comfort preferences.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                🟢 100% Office Tailored
              </h3>

              <p className="text-[13px] text-[#555] leading-6">
                Customized wellness protocols according to workplace needs.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                🟢 Zero Equipment Stress
              </h3>

              <p className="text-[13px] text-[#555] leading-6">
                We arrange yoga mats and full session setup support.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                🟢 Progress & HR Tracking
              </h3>

              <p className="text-[13px] text-[#555] leading-6">
                Monthly feedback analytics and wellness reports for HR teams.
              </p>
            </div>

            <div className="border border-orange-300 rounded-md bg-[#faf6f2] p-5">
              <h3 className="font-bold text-[#ef6c00] text-[15px] mb-2">
                🟢 Flat Transparent Rates
              </h3>

              <p className="text-[13px] text-[#555] leading-6">
                No surprise charges or hidden billing structures.
              </p>
            </div>

          </div>
        </div>
      </section>
  {/* CLIENT TESTIMONIAL SECTION */}
<section className="pb-14">
  <div className="max-w-5xl mx-auto px-4">

    {/* heading */}
    <div className="text-center mb-8">

      <h2 className="text-[28px] md:text-[34px] font-bold text-[#ef6c00] mb-2">
        What Our Corporate Clients Say
      </h2>

    </div>

    {/* testimonial cards */}
    <div className="grid md:grid-cols-3 gap-4 mb-10">

      <div className="border border-orange-300 bg-[#faf6f2] rounded-md p-5">
        <p className="text-[13px] text-[#555] leading-6 mb-4">
          “We started with Om Yogshala as a pilot for 15 employees in our
          Gurgaon office. Within a month, our HR team noticed fewer complaints
          about back pain. Now 40+ employees join.”
        </p>

        <h4 className="text-[13px] font-bold text-[#ef6c00]">
          — Wellness Manager, Cyber City, Gurgaon
        </h4>
      </div>

      <div className="border border-orange-300 bg-[#faf6f2] rounded-md p-5">
        <p className="text-[13px] text-[#555] leading-6 mb-4">
          “The trainer is incredible — she knew how to keep the energy right
          for a corporate group. People actually look forward to sessions now.”
        </p>

        <h4 className="text-[13px] font-bold text-[#ef6c00]">
          — HR Lead, Noida Sector 62
        </h4>
      </div>

      <div className="border border-orange-300 bg-[#faf6f2] rounded-md p-5">
        <p className="text-[13px] text-[#555] leading-6 mb-4">
          “We were skeptical at first — well people actually attend? But the
          turnout has been amazing. The desk yoga for our developers has been a
          game changer.”
        </p>

        <h4 className="text-[13px] font-bold text-[#ef6c00]">
          — Founder, Tech Startup, Delhi
        </h4>
      </div>

    </div>

    {/* INTERNATIONAL YOGA DAY */}
    <div className="border border-dashed border-orange-400 rounded-lg bg-[#fff7ef] p-8 text-center mb-10">

      <h3 className="text-[22px] font-bold text-[#ef6c00] mb-3">
        🌿 International Yoga Day Corporate Booking
      </h3>

      <p className="text-[14px] text-[#666] leading-7 max-w-3xl mx-auto mb-5">
        Every year on 21st June, optimize your workforce culture. Secure
        special high-energy 1-hour corporate workshops led directly at your
        workplace location by verified experts.
      </p>

      <button className="bg-[#ef6c00] hover:bg-orange-600 transition text-white px-7 py-3 rounded-md font-semibold">
        Reserve Yoga Day Slot
      </button>

    </div>

    {/* PRICING PLANS */}
    <div className="bg-[#f7f1eb] rounded-lg p-8 mb-10">

      <div className="text-center mb-8">

        <h2 className="text-[28px] md:text-[34px] font-bold text-[#ef6c00] mb-2">
          Corporate Yoga Pricing Plans
        </h2>

        <p className="text-[14px] text-[#666]">
          Simple, straightforward wellness pricing for corporate scaling
          budgets.
        </p>

      </div>

      {/* plans */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* plan 1 */}
        <div className="border border-orange-300 rounded-md bg-white p-6 text-center">

          <h3 className="text-[#ef6c00] font-bold text-[18px] mb-3">
            1 Session
          </h3>

          <h2 className="text-4xl font-bold text-[#222] mb-1">
            ₹5,000
          </h2>

          <p className="text-[13px] text-[#777] mb-6">
            Best for Special Single Event
          </p>

          <ul className="space-y-3 text-left text-[14px] text-[#555] mb-8">

            <li>✔ Certified Yoga Trainer</li>
            <li>✔ 1 Hour Custom Masterclass</li>
            <li>✔ Flexible Corporate Scheduling</li>
            <li>✔ Mats & Props Included</li>

          </ul>

          <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
            Book Now
          </button>

        </div>

        {/* plan 2 */}
        <div className="border-2 border-orange-400 rounded-md bg-white p-6 text-center relative">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[11px] px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <h3 className="text-[#ef6c00] font-bold text-[18px] mb-3">
            12 Sessions/Month
          </h3>

          <h2 className="text-4xl font-bold text-[#222] mb-1">
            ₹3,500
          </h2>

          <p className="text-[13px] text-[#777] mb-6">
            ₹42,000 / month flat rate
          </p>

          <ul className="space-y-3 text-left text-[14px] text-[#555] mb-8">

            <li>✔ 3 Days A Week Wellness Block</li>
            <li>✔ Custom Corporate Strategy</li>
            <li>✔ Weekly Progress Tracking</li>
            <li>✔ Mats & Props Included</li>

          </ul>

          <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
            Select Plan
          </button>

        </div>

        {/* plan 3 */}
        <div className="border border-orange-300 rounded-md bg-white p-6 text-center">

          <h3 className="text-[#ef6c00] font-bold text-[18px] mb-3">
            20 Sessions/Month
          </h3>

          <h2 className="text-4xl font-bold text-[#222] mb-1">
            ₹3,000
          </h2>

          <p className="text-[13px] text-[#777] mb-6">
            ₹60,000 / month flat rate
          </p>

          <ul className="space-y-3 text-left text-[14px] text-[#555] mb-8">

            <li>✔ 5 Days A Week Wellness Layout</li>
            <li>✔ High Engagement Custom Path</li>
            <li>✔ Deep HR Feedback Summary Reports</li>
            <li>✔ Mats & Full Props Included</li>

          </ul>

          <button className="w-full bg-[#ef6c00] hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold">
            Select Plan
          </button>

        </div>

      </div>

      {/* bottom note */}
      <div className="mt-6 border border-green-300 bg-green-50 rounded-md p-3 text-center text-[13px] text-green-700">
        💰 Save up to ₹40,000/month by utilizing the 20-session layout over
        individual single workshop block allocations.
      </div>

    </div>

    {/* YOGA CLASSES */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* card */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1518611012118-fb5fc6f2b497?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[210px] object-cover rounded-md"
        />

        <h3 className="text-[24px] font-bold text-[#ef6c00] mt-4 mb-3">
          Yoga Classes Greater in Noida
        </h3>

        <p className="text-[14px] text-[#555] leading-7 mb-5">
          Start your fitness journey with professional yoga classes in Greater
          Noida. We offer dedicated home yoga sessions in Alpha, Beta, Gamma,
          and Pari Chowk focusing on deep stretching, strength building, and
          mental calm.
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md font-semibold">
          Whatsapp
        </button>
      </div>

      {/* card */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[210px] object-cover rounded-md"
        />

        <h3 className="text-[24px] font-bold text-[#ef6c00] mt-4 mb-3">
          Yoga Classes in Faridabad
        </h3>

        <p className="text-[14px] text-[#555] leading-7 mb-5">
          Revitalize your mind and body with professional yoga classes in
          Faridabad. Our trainers visit your home to provide 1-on-1 guidance,
          ensuring a safe and effective practice for all age groups.
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md font-semibold">
          Whatsapp
        </button>
      </div>

      {/* card */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[210px] object-cover rounded-md"
        />

        <h3 className="text-[24px] font-bold text-[#ef6c00] mt-4 mb-3">
          Yoga Classes in Gurugram
        </h3>

        <p className="text-[14px] text-[#555] leading-7 mb-5">
          Elevate your lifestyle with elite yoga classes in Gurugram. Skip the
          studio rush and practice with expert personal trainers in DLF, Sohna
          Road, or Golf Course Road.
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md font-semibold">
          Whatsapp
        </button>
      </div>

      {/* card */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[210px] object-cover rounded-md"
        />

        <h3 className="text-[24px] font-bold text-[#ef6c00] mt-4 mb-3">
          Yoga Classes in Delhi
        </h3>

        <p className="text-[14px] text-[#555] leading-7 mb-5">
          Experience the ultimate convenience with our premium home yoga classes
          in Delhi. We bring certified personal trainers to your doorstep in
          South, West, North and East Delhi.
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md font-semibold">
          Whatsapp
        </button>
      </div>

      {/* card */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1518611012118-fb5fc6f2b497?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[210px] object-cover rounded-md"
        />

        <h3 className="text-[24px] font-bold text-[#ef6c00] mt-4 mb-3">
          Yoga Classes in Noida
        </h3>

        <p className="text-[14px] text-[#555] leading-7 mb-5">
          Transform your health with expert-led yoga classes in Noida. Whether
          you are in Sector 15, 62, or Noida Extension, our personalized home
          sessions are tailored to fit your busy corporate lifestyle.
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md font-semibold">
          Whatsapp
        </button>
      </div>

      {/* card */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-[210px] object-cover rounded-md"
        />

        <h3 className="text-[24px] font-bold text-[#ef6c00] mt-4 mb-3">
          Yoga Classes in Ghaziabad
        </h3>

        <p className="text-[14px] text-[#555] leading-7 mb-5">
          Achieve holistic wellness with the best yoga classes in Ghaziabad.
          From Indirapuram to Vaishali, our certified instructors provide
          customized home training to help you manage lifestyle disorders.
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-md font-semibold">
          Whatsapp
        </button>
      </div>

    </div>

  </div>
</section>
    </div>
  );
}