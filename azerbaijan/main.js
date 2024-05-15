axios.get('https://restcountries.com/v3.1/name/azerbaijan')
            .then(function (response) {
                const country = response.data[0];
                document.getElementById('name').textContent = country.name.common;
                document.getElementById('area').textContent = country.area + ' km²';
                document.getElementById('capital').textContent = country.capital[0];
                document.getElementById('coatOfArms').src = country.coatOfArms.svg;
                document.getElementById('flag').src = country.flags.svg;
            })
            .catch(function (error) {
                console.error('Error fetching the country data:', error);
            });
