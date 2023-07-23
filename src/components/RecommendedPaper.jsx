

const RecommendedPaper = () => {
    const recommendedPapers = [
        {
          title: 'Machine Learning Techniques for Image Recognition',
          link: 'https://example.com/paper1',
          authors: 'John Doe, Jane Smith',
          year: '2022',
        },
        {
          title: 'Advancements in Renewable Energy Sources',
          link: 'https://example.com/paper2',
          authors: 'Alice Johnson, Bob Williams',
          year: '2021',
        },
        {
          title: 'Blockchain Technology and its Applications',
          link: 'https://example.com/paper3',
          authors: 'Sam Brown, Emily Davis',
          year: '2023',
        },
      ];
    return (
        <div className="border m-1 p-4">
            <section className="recommended-papers-section py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Recommended Research Papers</h2>
      <ul className="space-y-4">
        {recommendedPapers.map((paper, index) => (
          <li key={index} className="border border-gray-300 p-4 rounded">
            <h3 className="text-xl font-semibold">{paper.title}</h3>
            <p className="text-gray-600">Authors: {paper.authors}</p>
            <p className="text-gray-600">Year: {paper.year}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read Paper
            </a>
          </li>
        ))}
      </ul>
    </section>
        </div>
    );
};

export default RecommendedPaper;