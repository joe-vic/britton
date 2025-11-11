document.addEventListener('DOMContentLoaded', function() {
    // PRODUCTS is available from js/products.js
    if (typeof PRODUCTS === 'undefined') {
        console.error('PRODUCTS data not found. Make sure products.js is loaded.');
        return;
    }

    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const divisionFiltersContainer = document.getElementById('division-filters');
    const categoryFiltersContainer = document.getElementById('category-filters');

    let currentProducts = [...PRODUCTS];

    function getCategoryName(category) {
        return category;
    }

    function renderProducts(productsToRender) {
        productsGrid.innerHTML = '';
        
        productsToRender.forEach(product => {
            const productCard = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card product-card h-100">
                        <div class="position-relative">
                            <img src="images/products/${encodeURI(product.image)}" class="card-img-top product-image" alt="${product.imageAlt || product.name}">
                            <span class="badge category-badge">${getCategoryName(product.category)}</span>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title product-title">${product.name}</h5>
                            <p class="card-text text-muted flex-grow-1">${product.summary.substring(0, 100)}...</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <span class="h6 text-muted mb-0">${product.division}</span>
                            </div>
                            <button class="btn btn-primary mt-3 view-details" data-id="${product.id}">
                                <i class="fas fa-info-circle me-1"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });
        
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const product = PRODUCTS.find(p => p.id === productId);
                showProductDetails(product);
            });
        });
    }

    function showProductDetails(product) {
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductCategory').textContent = product.category;
        document.getElementById('modalProductDescription').textContent = product.summary;
        document.getElementById('modalProductFormSize').textContent = product.formSize;
        document.getElementById('modalProductImage').src = `images/products/${encodeURI(product.image)}`;
        document.getElementById('modalProductAvailability').textContent = product.availability;

        const benefitsList = document.getElementById('modalProductBenefits');
        benefitsList.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });

        const directionsList = document.getElementById('modalProductDirections');
        directionsList.innerHTML = '';
        product.directions.forEach(direction => {
            const li = document.createElement('li');
            li.textContent = direction;
            directionsList.appendChild(li);
        });
        
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }

    function populateFilters() {
        const divisions = [...new Set(PRODUCTS.map(p => p.division))].sort();
        divisions.forEach(division => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary category-btn';
            button.dataset.division = division;
            button.textContent = division;
            divisionFiltersContainer.appendChild(button);
        });

        const categories = [...new Set(PRODUCTS.map(p => p.category))].sort();
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary category-btn';
            button.dataset.category = category;
            button.textContent = category;
            categoryFiltersContainer.appendChild(button);
        });
    }

    function filterAndRender() {
        const searchQuery = searchInput.value.toLowerCase();
        const activeDivision = document.querySelector('#division-filters .category-btn.active').dataset.division;
        const activeCategory = document.querySelector('#category-filters .category-btn.active').dataset.category;

        let filteredProducts = PRODUCTS.filter(product => {
            const matchesDivision = activeDivision === 'all' || product.division === activeDivision;
            const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
            const matchesSearch = !searchQuery || 
                                  product.name.toLowerCase().includes(searchQuery) ||
                                  product.summary.toLowerCase().includes(searchQuery) ||
                                  (product.tags && product.tags.join(' ').toLowerCase().includes(searchQuery));
            return matchesDivision && matchesCategory && matchesSearch;
        });

        const sortValue = sortSelect.value;
        if (sortValue === 'name-z-a') {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        renderProducts(filteredProducts);
    }

    function setupEventListeners() {
        searchInput.addEventListener('input', filterAndRender);
        sortSelect.addEventListener('change', filterAndRender);

        divisionFiltersContainer.addEventListener('click', function(e) {
            if (e.target.matches('.category-btn')) {
                this.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                filterAndRender();
            }
        });

        categoryFiltersContainer.addEventListener('click', function(e) {
            if (e.target.matches('.category-btn')) {
                this.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                filterAndRender();
            }
        });
    }

    // Initial setup
    populateFilters();
    setupEventListeners();
    filterAndRender(); // Initial render
});
