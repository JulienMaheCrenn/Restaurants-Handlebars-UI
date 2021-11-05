async function deleteRestaurant(btn) {
    const id = btn.getAttribute("data-id");
    const url = `http://localhost:3001/api/restaurants/${id}`;
    const response = await fetch(url, { method: "DELETE"});

    if (response.ok) {
        window.location = "/restaurants"
    }
};

async function updateRestaurant(event) {

    event.preventDefault();
    const form = event.target;

    const data = {
        id: form.restaurantId.value,
        name: form.name.value,
        imagelink: form.imagelink.value
    };

    const url = `http://localhost:3001/api/restaurants/${data.id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:  JSON.stringify(data),
    });
    
    if (response.ok) {
        window.location = `/restaurants/${data.id}`
    }
};

async function updateMenu(event) {

    event.preventDefault();
    const form = event.target;

    const data = {
        id: form.menuId.value,
        title: form.title.value,
        restaurantId: form.restaurantId.value
    };

    const url = `http://localhost:3001/api/menus/${data.id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:  JSON.stringify(data),
    });
    
    if (response.ok) {
        window.location = `/restaurants/${data.restaurantId}/menus`
    }
};

async function deleteMenu(btn) {
    const id = btn.getAttribute("data-id");
    const url = `http://localhost:3001/api/menus/${id}`;
    const response = await fetch(url, { method: "DELETE"});

    if (response.ok) {
        window.location.reload();
    }
};

async function deleteMenuItem(btn) {
    const id = btn.getAttribute("data-id");
    const url = `http://localhost:3001/api/menuitems/${id}`;
    const response = await fetch(url, { method: "DELETE"});

    if (response.ok) {
        window.location.reload();
    }
};

async function updateMenuItem(event) {

    event.preventDefault();
    const form = event.target;

    const data = {
        id: form.menuItemId.value,
        name: form.name.value,
        price: form.price.value,
        MenuId: form.menuId.value
    };

    const url = `http://localhost:3001/api/menuitems/${data.id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:  JSON.stringify(data),
    });
    
    if (response.ok) {
        window.location = `/menus/${data.MenuId}/menuitems`
    }
};
