# Stack-Card

😎 A simple utility to showcase StackOverFlow reputations & badges on your website 🤘

## Demo

<img src="https://github.com/adityasonel/stack-card/blob/master/screenshot.png" width=350></img>

For a live demo, visit [https://stack-card.vercel.app](https://stack-card.vercel.app).

## Usage

```
<!-- head -->
<script src="https://stack-card.vercel.app/stack-card.js"></script>


<!-- inside body, where you want to create the card -->
<div class="stack-card" user-id="your-user-id"></div>
```

## How to find your StackOverFlow userid

```
StackOverFlow userid is the number in the middle of your profile URL,

http://stackoverflow.com/users/8533971/username
------------------------------^^^^^^^^
This number also appears in links to your answers, and to any link you share, 
which helps track who shared the link (which is how you get the Publicist badge)
```

## Features

-   Supports reputation & badges count
-   Shows username, title and location (if available on profile)

## Upcoming

- All stack-sites support
- Show user's reputation graph
- Show user's top tags
