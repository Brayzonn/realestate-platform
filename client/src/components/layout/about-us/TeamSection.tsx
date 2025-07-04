const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Principal Broker',
      credentials: 'Licensed Realtor, MBA',
      experience: '15+ years',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=916&q=80',
      description:
        'Sarah founded our company with a vision to transform the real estate experience through personalized service and market expertise.',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Sales Agent',
      credentials: 'Licensed Realtor, CRS',
      experience: '12+ years',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=916&q=80',
      description:
        'Specializing in luxury properties and commercial real estate, Michael brings extensive market knowledge and negotiation skills.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      credentials: 'Licensed Property Manager',
      experience: '8+ years',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&h=917&q=80',
      description:
        'Emily ensures our property management services exceed expectations, handling everything from tenant relations to maintenance coordination.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
        <div className="mb-16 space-y-6">
          <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Meet Our <span className="font-medium">Team</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-gray-600">
            Experienced professionals dedicated to your real estate success
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm border border-gray-200/60 bg-gray-200 shadow-sm">
                <img
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  src={member.image}
                  alt={member.name}
                />
              </div>

              <div className="mt-8 space-y-3 text-left">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="font-light text-gray-600">{member.role}</p>
                </div>

                <p className="text-sm font-light tracking-wide text-gray-500 uppercase">
                  {member.credentials} • {member.experience}
                </p>

                <p className="leading-relaxed font-light text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
