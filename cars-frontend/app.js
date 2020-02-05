fetch("http://localhost:3000/cars")
  .then(response => response.json())
  .then(cars => {
    const lis = cars.map(car => {
      const li = document.createElement("li");
      li.innerHTML = `
            <p>
                Make: ${car.make}, Model: ${car.model} 
                <span style="
                    background-color: ${car.color}; 
                    border: 1px solid #aaa
                ">
                    &nbsp;
                </span>
            </p>
            `;
      return li;
    });

    const ul = document.querySelector(".cars");
    lis.forEach(li => ul.append(li));
  });
