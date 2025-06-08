export default function Education({ data }: { data: any[] }) {
  return (
    <section className="text-black py-8">
      <h2 className="text-xl font-bold mb-4">🎓 Education</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((edu) => (
          <div key={edu._id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-green-700 font-semibold">{edu.class}</h3>
            <p>{edu.course}</p>
            <p className="text-sm text-gray-600">{edu.college}</p>
            <p className="text-sm text-gray-500">
              {edu.startYear} – {edu.endYear}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}