
//         let allProducts = []; // keep all data 
//         let products = []; 
//         let filteredProducts = [];
//         let sortedProducts = []; 
//         let allSortedProducts = [];
        
//         // Product data fetching    
//         fetch('product_data.json')
//         .then(response => response.json())
//         .then(data => {
//             allProducts = data;           // store original data
//             products = [...allProducts];  // shallow copy
//             filteredProducts = [...allProducts];

//             setPagination(products);
//             displayProducts(1, products);
//         })
//         .catch(err => console.error('Failed to load products:', err));

//         //search area
//         const searchBox = document.getElementById('searchbox_id');
        
//         function runSearch(){
            
//             const inputKeyword = searchBox.value.trim().toLowerCase();
            
//             const selectedBrands = Array.from(document.querySelectorAll('.brands .form_check_input_brands:checked'))
//             .map(chk => chk.nextElementSibling.textContent.trim().toLowerCase());
            
//             const selectedCategories = Array.from(document.querySelectorAll('.categories .form_check_input_cat:checked'))
//             .map(chk => chk.nextElementSibling.textContent.trim().toLowerCase());
            
            
//             // Clear previous "no results" message (if any)
//             const oldRes = document.querySelector('.no_results');
//             if (oldRes) oldRes.style.display = 'none';

//             let results = [...allProducts];
//             //condition for one or more items in Brands section are selected
//             if(selectedBrands.length > 0){
//                 results = results.filter(p=>{
//                     const brand = (p.brand || '').toString().toLowerCase();
//                     return selectedBrands.includes(brand);
//                 });
//                 //condition for one or more items in Categories section are selected
//                 if(selectedCategories > 0){
//                     results = results.filter(p=>{
//                         const cat = (p.small_category || p.main_category || '').toString().toLowerCase();
//                         return selectedCategories.includes(cat);
//                     });
                    
//                     //condition for search box data exist
//                     if( inputKeyword !== ''){
//                         const kw = inputKeyword;
//                         results = results.filter(p=>{
//                         return ( p.name || '').toString().toLowerCase().includes(kw)
//                         || (p.brand || '').toString().toLowerCase().includes(kw)
//                         || (p.main_category || '').toString().toLowerCase().includes(kw)
//                         || (p.small_category || '').toString().toLowerCase().includes(kw)
//                         || (p.code || '').toString().toLowerCase().includes(kw);
//                         });
//                     }
//                 }
//                 //condition for no item in Categories section is selected
//                 else{
//                     //condition for search box data exist
//                     if( inputKeyword !== ''){
//                         const kw = inputKeyword;
//                         results = results.filter(p=>{
//                         return ( p.name || '').toString().toLowerCase().includes(kw)
//                         || (p.brand || '').toString().toLowerCase().includes(kw)
//                         || (p.main_category || '').toString().toLowerCase().includes(kw)
//                         || (p.small_category || '').toString().toLowerCase().includes(kw)
//                         || (p.code || '').toString().toLowerCase().includes(kw);
//                         });
//                     }
//                 }

//             }
//             //condition for no item in Brands section is selected
//             else{
//                 if(selectedBrands.length > 0){
//                 results = results.filter(p=>{
//                     const brand = (p.brand || '').toString().toLowerCase();
//                     return selectedBrands.includes(brand);
//                 });
//                 //condition for one or more items in Categories section are selected
//                 if(selectedCategories.length > 0){
//                     results = results.filter(p=>{
//                         const cat = (p.small_category || p.main_category || '').toString().toLowerCase();
//                         return selectedCategories.includes(cat);
//                     });
                    
//                     //condition for search box data exist
//                     if( inputKeyword !== ''){
//                         const kw = inputKeyword;
//                         results = results.filter(p=>{
//                         return ( p.name || '').toString().toLowerCase().includes(kw)
//                         || (p.brand || '').toString().toLowerCase().includes(kw)
//                         || (p.main_category || '').toString().toLowerCase().includes(kw)
//                         || (p.small_category || '').toString().toLowerCase().includes(kw)
//                         || (p.code || '').toString().toLowerCase().includes(kw);
//                         });
//                     }
//                 }
//                 //condition for no item in Categories section is selected
//                 else{
//                     //condition for search box data exist
//                     if( inputKeyword !== ''){
//                         const kw = inputKeyword;
//                         results = results.filter(p=>{
//                         return ( p.name || '').toString().toLowerCase().includes(kw)
//                         || (p.brand || '').toString().toLowerCase().includes(kw)
//                         || (p.main_category || '').toString().toLowerCase().includes(kw)
//                         || (p.small_category || '').toString().toLowerCase().includes(kw)
//                         || (p.code || '').toString().toLowerCase().includes(kw);
//                         });
//                     }
//                 }

//             }
//         }
//         }
//         // Button click search
//         const searchBtn = document.getElementById('action_search_btn');
//         searchBtn.addEventListener('click', () => runSearch());
        

//         //search area
//         //clear area
//         const clearBtn = document.getElementById('action_clear_btn');
//         clearBtn.addEventListener('click', () => {
//             //clear search box
//             document.getElementById('searchbox_id').value = '';
//             //clear checkbox values of the brands
//             document.querySelectorAll('.brands .form_check_input_brands').forEach( chkbox => chkbox.checked = false)
//             document.getElementById('select_all_brands_label').textContent = 'Select All';

//             //clear checkbox values of the categories
//             document.querySelectorAll('.categories .form_check_input_brands').forEach( chkbox => chkbox.checked = false)

//             const moreChkBox = document.querySelector('.more_checks');
//             moreChkBox.style.display = 'none';

//             const seeMoreBtn = document.querySelector('.see_more_brand_btn');
//             seeMoreBtn.textContent = 'See More';
//             runSearch('');
//         })
//         // JS for See More/See Less
//         const toggleLink = document.querySelector('.see_more_brand_btn');
//         const moreChecks = document.querySelector('.more_checks');
//         toggleLink.addEventListener('click',()=>{
//             const isVisible = moreChecks.style.display === 'block';
//             moreChecks.style.display = isVisible? 'none' : 'block';
//             toggleLink.textContent = isVisible? 'See more' : 'See Less'
//         });
//         //JS for Select All/Deselect All
//         const selectAllCheckBox = document.getElementById('select_all_brands');
//         const selectAllLabel = document.getElementById('select_all_brands_label');
//         const allBrandsCheckBox = document.querySelectorAll('.form_check_input_brands')
//         selectAllCheckBox.addEventListener('change',()=>{
//             allBrandsCheckBox.forEach(brandsCheckbox => {
//                 brandsCheckbox.checked = selectAllCheckBox.checked; 
//                 selectAllLabel.textContent = selectAllCheckBox.checked ? 'Deselect All' : 'Select All';
//             });
//         });

       


//         //JS for Price Range Slider
//         document.querySelectorAll('.category_list .toggle').forEach(toggle => {
//             toggle.addEventListener('click', () => {
//                 toggle.classList.toggle('active');
//                 const nextUl = toggle.nextElementSibling;
//                 if (nextUl && nextUl.tagName === 'UL') {
//                 nextUl.style.display = nextUl.style.display === 'block' ? 'none' : 'block';
//                 }
//             });
//         });

      

//         let products_per_page = parseInt(document.getElementById('view_count').value);   

//         const viewCountSelect = document.getElementById('view_count')
//         viewCountSelect.addEventListener('change',() => {    
//             products_per_page = parseInt(viewCountSelect.value)

//             // //Reset the slider if the slider is moved
//             // const $slider = $(".slider_price_range");
//             // const min = $slider.slider("option","min");
//             // const max = $slider.slider("option","max");
//             // // reset slider handles
//             // $slider.slider("values",[min,max]);
//             // var res = "$"+min+' - $'+max;
//             // $slider.closest('.slider-range').find('.price_range').html(res)

//             setPagination(products);
//             displayProducts(1,products);
//         })


//         //JS for Price Range Slider
//         //UI
//         $('.slider_price_range').each(function(){
//             var min = jQuery(this).data('min');
//             var max = jQuery(this).data('max');
//             var unit = jQuery(this).data('unit');
//             var min_value = jQuery(this).data('value-min');
//             var max_value = jQuery(this).data('value-max');
//             var label_result = jQuery(this).data('label-result');
//             var t = $(this);
//             $(this).slider({
//                 range: true,
//                 min:min,
//                 max:max,
//                 values:[min_value, max_value],
//                 slide: function (event, ui){
//                     var res = label_result+" "+unit+ ui.values[0]+' - '+unit+ ui.values[1];
//                     console.log(t);
//                     t.closest('.slider-range').find('.price_range').html(res);

//                     //filter when slider moves
//                     filterProductBySlider(ui.values[0],ui.values[1]);
//                 }
//             })
//         })

//         //Filter By Price Slider
//         function filterProductBySlider(minPrice, maxPrice) {
//             if(allSortedProducts.length > 0){
//                 filteredProducts = allSortedProducts.filter(p => {
//                 const price = parseInt(p.price.replace('¥',''));
//                 return price >= minPrice && price <= maxPrice;
//             });
//             products = [...filteredProducts]; // update current view only 
//             }
//             else{
//                 filteredProducts = allProducts.filter(p => {
//                     const price = parseInt(p.price.replace('¥',''));
//                     return price >= minPrice && price <= maxPrice;
//                 });
//                 products = [...filteredProducts]; // update current view only
//             }
            
//             setPagination(filteredProducts);
//             displayProducts(1, filteredProducts);
//         }
//         //Sorty By Price Selector
//         const sortSelect = document.getElementById('sorty_option');
        
//         sortSelect.addEventListener('change', () => {
//             const sortValue = sortSelect.value;
//             Array.from(sortSelect.options).forEach( opt =>
//                 opt.classList.remove('selected')
//             )
//             allSortedProducts = [...allProducts];
//             sortSelect.options[sortSelect.selectedIndex].classList.add('selected');
//             if(filteredProducts.length >0){
//                 sortedProducts = [...products]; // sort current filtered view
//             }
//             else{
//                 sortedProducts = [...allProducts]; // sort current filtered view
//             }
//             if (sortValue === '値段：安い順') {
//                 sortedProducts.sort((a, b) => parseFloat(a.price.replace('¥', '')) - parseFloat(b.price.replace('¥', '')));
//                 allSortedProducts.sort((a, b) => parseFloat(a.price.replace('¥', '')) - parseFloat(b.price.replace('¥', '')));
//             } else if (sortValue === '値段：高い順') {
//                 sortedProducts.sort((a, b) => parseFloat(b.price.replace('¥', '')) - parseFloat(a.price.replace('¥', '')));
//                 allSortedProducts.sort((a, b) => parseFloat(b.price.replace('¥', '')) - parseFloat(a.price.replace('¥', '')));
//             }
//             products = [...sortedProducts]; // update current view only
//             setPagination(sortedProducts);
//             displayProducts(1, sortedProducts);
//         });



// //Initialize dynamic pagination based on the number of products
// function setPagination(data){
// const total_products = data.length
// const total_pages = Math.ceil(total_products/products_per_page)
// const paginationContainer = document.querySelector('.pagination');
// paginationContainer.innerHTML = ''; //
// for(let i=1 ; i <= total_pages; i++){
//     const li = document.createElement('li');
//     li.classList.add('page_item');
//     if(i === 1) li.classList.add('active');

//     const a = document.createElement('a');
//     a.classList.add('page_link');
//     a.href = '#';
//     a.textContent = i.toString().padStart(2,'0')
    

//     a.addEventListener('click',(e)=>{
//         e.preventDefault();
//         document.querySelectorAll('.page_item').forEach(item => item.classList.remove('active'));
//         li.classList.add('active');
//         displayProducts(i,data);
//     })

//     li.appendChild(a);
//     paginationContainer.appendChild(li);

// }
// }
// //rating star
// function getStarsHTML(rating){
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStars ? 1:0);

//     let html = '';
//     //for full star
//     for(let i = 0; i< fullStars; i++) html +='<i class ="fa fa-star"></i>';
//     //for half star
//     for(let i = 0; i< halfStars; i++) html +='<i class ="fa fa-star-half-alt"></i>';
//     //for empty star
//     for(let i = 0; i< emptyStars; i++) html +='<i class ="fa fa-star-o"></i>';
//     return html;
// }
// // Function to show products per page
// function displayProducts(pageNumber,data){
    
// const start = (pageNumber - 1) * products_per_page;
//     const end = start + products_per_page;
//     const pageProducts = data.slice(start, end);
// const productContainer = document.querySelector('.product_grid_row');
//     let html = '';
//     pageProducts.forEach((p,i) => {
//         const stars = getStarsHTML(p.rating);
//         const globalIndex = start + i;
//         html += `
//         <div class="product_card" data-index = "${globalIndex}">
//             <img src="${p.img}" alt="${p.name}">
//             <h6 class="brand">${p.brand}</h6>
//             <p class="name">${p.name}</p>
//             <p class="price"><span>Price :</span> ${p.price}</p>
//             <p class="code">Code : ${p.code}</p>
//             <div class="rating">${stars}</div>
//         </div>
//         `;
//     });
//     productContainer.innerHTML = html;

//     //=== modal for product detial ===
//     document.querySelectorAll('.product_card').forEach( card => {
//         card.addEventListener('click', () =>{
//             const i = parseInt(card.dataset.index);
//             const product = data[i];
//             console.log(product);
//             openModal(product);
//         })
//     })
// }
//     const modal = document.getElementById('productDetailModal');
//     const closeBtn = document.querySelector('.close_btn');
//     function openModal(productInfo){
//         document.getElementById('modal_product_img').src = productInfo.img;
//         document.getElementById('modal_brand').textContent = productInfo.brand;
//         document.getElementById('modal_name').textContent = productInfo.name;
//         document.getElementById('modal_price').innerHTML = `<span>Price :</span> ${productInfo.price}`;
//         document.getElementById('modal_code').textContent = 'Code : '+ productInfo.code;
//         const stars = getStarsHTML(productInfo.rating);
//         document.getElementById('modal_rating').innerHTML= stars
//         modal.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     }
//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto'
//     });

//     window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto'
//     }
//     });



// let allProducts = []; 
// let products = []; 
// let filteredProducts = [];
// let sortedProducts = []; 
// let allSortedProducts = [];

// // Load product data
// fetch('product_data.json')
// .then(response => response.json())
// .then(data => {
//     allProducts = data;
//     products = [...allProducts];
//     filteredProducts = [...allProducts];
//     setPagination(products);
//     displayProducts(1, products);
// })
// .catch(err => console.error('Failed to load products:', err));

// // === SEARCH ===
// const searchBox = document.getElementById('searchbox_id');

// function runSearch(){
//     const inputKeyword = searchBox.value.trim().toLowerCase();
//     const selectedBrands = Array.from(document.querySelectorAll('.brands .form_check_input_brands:checked'))
//         .map(chk => chk.nextElementSibling.textContent.trim().toLowerCase());
//     const selectedCategories = Array.from(document.querySelectorAll('.categories .form_check_input_cat:checked'))
//         .map(chk => chk.nextElementSibling.textContent.trim().toLowerCase());

//     if(inputKeyword === '' && selectedBrands.length === 0 && selectedCategories.length === 0){
//         showAlertMsg('検索条件を入力してください。');
//         return;
//     }
    
//     // Clear previous no-results message
//     const noResArea = document.querySelector('.searchRes_not_found');
//     noResArea.innerHTML = '';

//     let results = [...allProducts];

//     // === Brand filtering ===
//     if(selectedBrands.length > 0){
//         results = results.filter(p=>{
//             const brand = (p.brand || '').toLowerCase();
//             return selectedBrands.includes(brand);
//         });
//     }

//     // === Category filtering ===
//     if(selectedCategories.length > 0){
//         results = results.filter(p=>{
//             const cat = (p.small_category || p.main_category || '').toLowerCase();
//             return selectedCategories.includes(cat);
//         });
//     }

//     // === Keyword filtering ===
//     if(inputKeyword !== ''){
//         results = results.filter(p=>{
//             const kw = inputKeyword;
//             return (p.name || '').toLowerCase().includes(kw)
//             || (p.brand || '').toLowerCase().includes(kw)
//             || (p.main_category || '').toLowerCase().includes(kw)
//             || (p.small_category || '').toLowerCase().includes(kw)
//             || (p.code || '').toLowerCase().includes(kw);
//         });
//     }

//     // === Show results or message ===
//     if(results.length === 0){
//         let msg = '該当する商品が見つかりません。';
//         // Prepare category and brand lines (each one separate)
//         let kwLine = '';
//         let catLine = '';
//         let brandLine = '';

//         const hasBrands = selectedBrands.length > 0;
//         const hasCategories = selectedCategories.length > 0;
//         const hasKeyword = inputKeyword !== '';

//         // Add keyword info
//         if(hasKeyword){
//            kwLine = `キーワード：" <strong>${inputKeyword}</strong> "`  
//         }
        
        

//     if (hasCategories) {
//         const catList = selectedCategories.map(c => `<strong>${c.charAt(0).toUpperCase() + c.slice(1)}</strong>`).join(', ');
//         catLine = `カテゴリー：" ${catList} "`;
//     }

//     if (hasBrands) {
//         const brandList = selectedBrands.map(b => `<strong>${b.charAt(0).toUpperCase() + b.slice(1)}</strong>`).join(', ');
//         brandLine = `ブランド：" ${brandList} "`;
//     }

//         // Combine lines — each on its own line if they exist
//         const lines = [];

//         if (kwLine) lines.push(kwLine);
//         if (catLine) lines.push(catLine);
//         if (brandLine) lines.push(brandLine);

//         if (lines.length > 0) {
//             msg += '<br>' + lines.join('<br>');
//         }
//     // Final render
//     noResArea.innerHTML = `<p class="no_results">${msg}</p>`;

        
//     }

//     filteredProducts = results;
//     products = [...results];
//     setPagination(results);
//     displayProducts(1, results);
// }
// function showAlertMsg(message){
//        // Remove existing alert if any
//     const existing = document.querySelector('.top-alert');
//     if (existing) existing.remove();

//     // Create alert box
//     const alertBox = document.createElement('div');
//     alertBox.className = 'top-alert';
//     alertBox.innerHTML = `<span>${message}</span>`;
//     document.body.appendChild(alertBox);

//     // Auto hide after 2.5 seconds
//     setTimeout(() => {
//         alertBox.classList.add('fade-out');
//         setTimeout(() => alertBox.remove(), 500);
//     }, 3000);
// }
// // Button click search
// document.getElementById('action_search_btn').addEventListener('click', runSearch);

// // === CLEAR ===
// document.getElementById('action_clear_btn').addEventListener('click', () => {
//     searchBox.value = '';
//     document.querySelectorAll('.brands .form_check_input_brands').forEach(chk => chk.checked = false);
//     document.querySelectorAll('.categories .form_check_input_cat').forEach(chk => chk.checked = false);
//     document.getElementById('select_all_brands_label').textContent = '全てを選択';

//     const moreChkBox = document.querySelector('.more_checks');
//     moreChkBox.style.display = 'none';
//     const noRes = document.querySelector('.no_results');
//     if (noRes) noRes.style.display = 'none';
//     document.querySelector('.see_more_brand_btn').textContent = 'See More';

//     products = [...allProducts];
//     setPagination(products);
//     displayProducts(1, products);
// });

// // === See More / See Less ===
// const toggleLink = document.querySelector('.see_more_brand_btn');
// const moreChecks = document.querySelector('.more_checks');
// toggleLink.addEventListener('click',()=>{
//     const isVisible = moreChecks.style.display === 'block';
//     moreChecks.style.display = isVisible? 'none' : 'block';
//     toggleLink.textContent = isVisible? 'もっと見る' : '閉じる';
// });

// // === Select All / Deselect All for brand===
// const selectAllCheckBox = document.getElementById('select_all_brands');
// const selectAllLabel = document.getElementById('select_all_brands_label');
// const allBrandsCheckBox = document.querySelectorAll('.form_check_input_brands');
// selectAllCheckBox.addEventListener('change',()=>{
//     allBrandsCheckBox.forEach(chk => chk.checked = selectAllCheckBox.checked);
//     selectAllLabel.textContent = selectAllCheckBox.checked ? '全てを解除' : '全てを選択';
// });


// // === Category toggle ===
// document.querySelectorAll('.category_list .toggle').forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.classList.toggle('active');
//         const nextUl = toggle.nextElementSibling;
//         if (nextUl && nextUl.tagName === 'UL') {
//             nextUl.style.display = nextUl.style.display === 'block' ? 'none' : 'block';
//         }
//     });
// });

// // === Pagination & Display ===
// let products_per_page = 10;
// const viewCountSelect = document.getElementById('view_count');
// viewCountSelect.addEventListener('change',() => {
//     products_per_page = parseInt(viewCountSelect.value);
//     setPagination(products);
//     displayProducts(1, products);
// });

// function setPagination(data){
//     const total_products = data.length;
//     const total_pages = Math.ceil(total_products / products_per_page);
//     const paginationContainer = document.querySelector('.pagination');
//     paginationContainer.innerHTML = '';

//     for(let i = 1; i <= total_pages; i++){
//         const li = document.createElement('li');
//         li.classList.add('page_item');
//         if(i === 1) li.classList.add('active');

//         const a = document.createElement('a');
//         a.classList.add('page_link');
//         a.href = '#';
//         a.textContent = i.toString().padStart(2,'0');

//         a.addEventListener('click', (e)=>{
//             e.preventDefault();
//             document.querySelectorAll('.page_item').forEach(item => item.classList.remove('active'));
//             li.classList.add('active');
//             displayProducts(i, data);
//         });

//         li.appendChild(a);
//         paginationContainer.appendChild(li);
//     }
// }

// // === Rating Star ===
// function getStarsHTML(rating){
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

//     let html = '';
//     for(let i = 0; i < fullStars; i++) html += '<i class="fa fa-star"></i>';
//     if(halfStars) html += '<i class="fa fa-star-half-alt"></i>';
//     for(let i = 0; i < emptyStars; i++) html += '<i class="fa fa-star-o"></i>';
//     return html;
// }

// // === Display Products ===
// function displayProducts(pageNumber, data){
//     const start = (pageNumber - 1) * products_per_page;
//     const end = start + products_per_page;
//     const pageProducts = data.slice(start, end);
//     const productContainer = document.querySelector('.product_grid_row');

//     if(pageProducts.length === 0){
//         productContainer.innerHTML = '';
//         return;
//     }

//     let html = '';
//     pageProducts.forEach((p, i) => {
//         const stars = getStarsHTML(p.rating);
//         const globalIndex = start + i;
//         html += `
//         <div class="product_card" data-index="${globalIndex}">
//             <img src="${p.img}" alt="${p.name}">
//             <h6 class="brand">${p.brand}</h6>
//             <p class="name">${p.name}</p>
//             <p class="price"><span>Price :</span> ${p.price}</p>
//             <p class="code">Code : ${p.code}</p>
//             <div class="rating">${stars}</div>
//         </div>`;
//     });
//     productContainer.innerHTML = html;

//     // === Modal open ===
//     document.querySelectorAll('.product_card').forEach(card => {
//         card.addEventListener('click', () => {
//             const i = parseInt(card.dataset.index);
//             const product = data[i];
//             openModal(product);
//         });
//     });
// }

// // === Modal ===
// const modal = document.getElementById('productDetailModal');
// const closeBtn = document.querySelector('.close_btn');

// function openModal(productInfo){
//     document.getElementById('modal_product_img').src = productInfo.img;
//     document.getElementById('modal_brand').textContent = productInfo.brand;
//     document.getElementById('modal_name').textContent = productInfo.name;
//     document.getElementById('modal_price').innerHTML = `<span>Price :</span> ${productInfo.price}`;
//     document.getElementById('modal_code').textContent = 'Code : ' + productInfo.code;
//     document.getElementById('modal_rating').innerHTML = getStarsHTML(productInfo.rating);
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//     document.body.style.overflow = 'auto';
// });

// window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// });
