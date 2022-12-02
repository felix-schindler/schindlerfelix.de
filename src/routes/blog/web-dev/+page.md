A lot of things happen until you see your favorite website. In this article you
will

0. Learn How does a Website work
1. Getting startet with web dev (HTML, CSS, little bit of JS)
2. Hot to set up a web server / host a website
3. Configuring a domain
4. Artichtecture of a website
5. Choosing a tech stack (and BaaS)
6. The Edge

# How does a browser work

When you load a website, the browser sends a [HTTP](#whats-http) request to the
server of that website. The server then responds with the HTML (content), CSS
(style) and JavaScript or WebAssembly (logic) of the website via HTTP.

## What's HTTP

The Hypertext Transfer Protocol is the foundation of data communication for the
World Wide Web. The latest and greatest version is HTTP/3, which is also the
first version based on UDP.

> ### What's HTTPS
>
> HTTPS is the encrypted version of HTTP, which means all of the traffic between
> browser and server is secure. In most web browsers you're warned if a website
> is "not secure" (➡️ doesn't use HTTP**S**).

## Supported programming languages

A common browser only supports 4 programming languages.

### HTML

The Hypertext Markup Language defines the content of a website. There are a lot
of [HTML-Tag](https://www.w3schools.com/TAGs/) to specify the kind of content.
HTML is probably the easiest way to define a user interface (UI). HTML code is
always defined in `.html` files.

```html
<button type="button">Button</button>
```

This simple one-liner already already renders a beautiful button, when opened in
a browser.

![Simple Button saying with on white background](/img/blog/html-button.png)

### CSS

The Cascading Style Sheets define the style of a website. There are a lot of
[CSS Properties](https://www.w3schools.com/cssref/) to specify the style of the
content (HTML).

CSS code can be written either in a seperate `.css` file or within the `<style>`
tag inside a HTML file.

```html
<style>
	html {
		color: white;
		background-color: black;
	}
</style>

<button type="button">Button</button>
```

![Simple Button with on black background](/img/blog/html-button-css.png)

### JavaScript

JavaScript defines the logic of a website. JavaScript is a full fletched
programming language with all the things you need. It can either be writting
within the `<script>` tag inside a HTML file or in a separate `.js` file.

With JavaScript you can make the website interactive. Add the following code
within the corresponding tag and click the button, to see what happens.

```js
document.querySelector("button").addEventListener("click", () => {
  if (confirm("Do you want to continue")) {
    alert('You pressed "Ok"');
  }
});
```

### Web Assembly

Web Assembly (Wasm) can also define the logic of a website. It doesn't really
make sense to write it, since the computer sience world has basically moved on
from all Assembly languages but it's a common comile-target because of the
performance.

With it you can write your frontend code in another programming language than
JavaScript. For example [Python](https://pyscript.net), PHP or
[C#](https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-7.0).

# What does the server do

A webserver is there to send files.

## Sending files

A webserver is there to send a response to every request. If you request
`GET /about.html` with your web browser, the corresponding webserver looks if it
has the file `about.html`. If so, it sends the status `200 - OK` with the
content of the file. If the file does not exist, it sends the status
`404 - Not Found`.

# More coming soon...

Come back soon to read more

<!-- ## Headers, Cookies, Content -->
