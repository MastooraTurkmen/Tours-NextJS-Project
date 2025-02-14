const url = "https://www.course-api.com/react-tours-project";

async function ToursPage() {
  const response = await fetch(url);
  const data = await response.json();

  return (
    <div>
      <main>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.info}</p>
              <h4>${item.price}</h4>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default ToursPage;
