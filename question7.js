// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

async function postsData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  const checkUser = data.filter((post) => post.userId === 1);
  const postsDiv = document.getElementById("posts");

  checkUser.map((post) => {
    postsDiv.innerHTML += `
      <div class="post">
        <h1>${post.title}</h1>
        <p>${post.body}</p>
      </div>`;
  });
}
postsData();

// 6.3 (3p) Jag kunde inte avsluta
async function comData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await resp.json();
  const checkUser = data.filter((com) => com.postId === 1);
  const comDiv = document.getElementById("postsWithComments");

  checkUser.map((com) => {
    comDiv.innerHTML += `
      <div class="post">
        <p>${com.body}</p>
      </div>`;
  });
}
comData();
