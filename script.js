function generateRecipe() {
    var dishName = document.getElementById('dishName').value.toLowerCase(); // Convert to lowercase for case-insensitivity

    if (dishName) {
        var recipeSteps = getRecipeSteps(dishName);
        if (recipeSteps) {
            displayRecipe(recipeSteps, dishName);
        } else {
            alert('Recipe not available for ' + dishName);
        }
    } else {
        alert('Please enter the dish name.');
    }
}

function getRecipeSteps(dishName) {
    switch (dishName) {
        case 'chicken curry':
            return [
                'Marinate the chicken with your favorite spices.',
                'Heat oil in a pan, add chopped onions, and sauté until golden brown.',
                'Add ginger-garlic paste and sauté for a minute.',
                'Add chopped tomatoes and cook until they are soft.',
                'Add marinated chicken and cook until it changes color.',
                'Add curry powder, salt, and any additional spices per your taste.',
                'Pour water, cover the pan, and let it simmer until the chicken is cooked.',
                'Garnish with fresh coriander leaves.'
            ];

        case 'spaghetti bolognese':
            return [
                'Boil water in a large pot and cook spaghetti according to package instructions.',
                'In a pan, heat olive oil and sauté minced garlic and chopped onions until softened.',
                'Add ground beef and cook until browned. Drain excess fat.',
                'Stir in tomato sauce, crushed tomatoes, and Italian seasoning.',
                'Simmer the sauce for about 20 minutes.',
                'Serve the sauce over the cooked spaghetti.'
            ];

        case 'vegetable stir-fry':
            return [
                'Chop your favorite vegetables (e.g., broccoli, bell peppers, carrots).',
                'Heat oil in a wok or skillet.',
                'Add vegetables and stir-fry until they are tender-crisp.',
                'In a small bowl, mix soy sauce, ginger, and garlic.',
                'Pour the sauce over the vegetables and toss to combine.',
                'Serve the vegetable stir-fry over rice or noodles.'
            ];

        // Add more cases for additional dishes

        default:
            return null;
    }
}

function displayRecipe(recipeSteps, dishName) {
    var stepsHTML = '<h2>Steps to Cook ' + dishName + '</h2><ol>';

    for (var i = 0; i < recipeSteps.length; i++) {
        stepsHTML += '<li>' + recipeSteps[i] + '</li>';
    }

    stepsHTML += '</ol>';
    document.getElementById('recipeSteps').innerHTML = stepsHTML;
}
