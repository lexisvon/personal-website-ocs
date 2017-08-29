# CSS - Personal Website

You **must** take this project in phases, in the right order. It's very easy to mis-learn CSS, so please trust me on how I've structured the phases.

Here are some quick links to each phase, for your convenience:

1. [Mobile First](#phase-1-mobile-first)
2. [Hovers](#phase-2-hovers)
3. [Hero Image](#phase-3-hero-image)
4. [Navigation Toggle](#phase-4-navigation-toggle)
5. [Desktop Layout](#phase-5-desktop-layout)
6. [Article Images](#phase-6-article-images)
7. [Identity](#phase-7-identity)

Before you start, go over these instructions on how to learn design: https://gist.github.com/sumeetjain/b042e1e8693348b06439be9db484986b

---

First, some common questions and their answers:

**Q: How exact do colors, fonts, and sizes need to be?** Colors are the least important. Get close, but don't spend much time on this as _Phase 7_ will deal with colors. Fonts should be close--check Google Fonts for something comparable. Sizes should be almost exact, so develop an eye for detail as its relates to font size, margin, padding, and positioning.

**Q: Where do I get graphics/icons?** For the first couple phases, you'll only need icons. Check out [Font Awesome](http://fontawesome.io/) but feel free to expand your search. There are lots of [tutorials about using icon fonts](https://www.youtube.com/results?search_query=icon+font&page=&utm_source=opensearch). When you need graphics, consider using images from Google's search, Flickr, or even making your own.

**Q: Should I have one stylesheet per webpage?** Nope, just one for the entire website.

**Q: Should this be a Sinatra site?** Nope. Just static HTML/CSS for the first couple/few phases, and then you'll integrate it into Jekyll and GitHub Pages (which will be explained later).

**Q: The designs don't use Gist for the code samples, so should I _not_ be using Gist?** You _should_ use Gist. Ignore that discrepancy from the designs.

**Q: This design seems to belong to Philip Walton, so can I check out his website and copy code?** Please don't. It'll rob you of the learning opportunity.

**Q: Why am I stealing someone else's design!?** It's just the first step in the process! You'll be personalizing the website throughout the phases. But frankly, there isn't much uniqueness to the design in the first place (hence why it was chosen). It's based on one of the generic templates that folks all over the world use for their personal sites, so it's easy to extend and easy for people to navigate (since they're already accustomed to how it's laid out).

---

[Back to top ⬆](#personal-website)

## Phase 1: Mobile-First

Build the CSS and HTML for exactly this website:

**Homepage**

![](https://cl.ly/jFo5/Screen%20Shot%202017-02-21%20at%2012.51.34%20PM.png)

You can see the header there as well.

**Single Article**

![](https://cl.ly/jGcc/Screen%20Shot%202017-02-21%20at%2012.59.21%20PM.png)

There are also more granular styles to help make each article easier to read:

- [Styling headers, code samples, etc](https://cl.ly/jGBu/Screen%20Shot%202017-02-21%20at%2012.59.58%20PM.png)
- [Footnotes and Twitter sharing area](https://cl.ly/jGlW/Screen%20Shot%202017-02-21%20at%201.00.21%20PM.png)
- [Images and image captions](https://cl.ly/jFlj/Screen%20Shot%202017-02-21%20at%201.06.36%20PM.png)
- [Callout sections for notes/tips/asides](https://cl.ly/jFmu/Screen%20Shot%202017-02-21%20at%201.06.55%20PM.png)

**About**

![](https://cl.ly/jG4k/Screen%20Shot%202017-02-21%20at%201.01.03%20PM.png)

**Articles Index**

![](https://cl.ly/jGcq/Screen%20Shot%202017-02-21%20at%201.01.34%20PM.png)

### Content

Of course, you'll want to go through and add you own content at some point. But sometimes it's helpful to have a bunch of fake content at first, because if we don't have enough real content, it's hard to see how the actual styles look.

### Dev Tools

You **must** keep your browser organized like this:

![](https://cl.ly/jFwv/Screen%20Shot%202017-02-21%20at%201.28.45%20PM.png)

This shows the actual website at a narrow width, leaving most of the window open for the developer tools. This way you can quickly experiment with some CSS, check if it accomplishes a goal, then jump back to Sublime Text to add the code to your actual CSS file. Repeating this process for each bit of visual style you're trying to code is the best approach.

**It does not matter what the website looks like at a larger width.** This is the attitude that drives mobile-first development.

---

[Back to top ⬆](#personal-website)

## Phase 2: Hovers

There are a few hover effects in the design:

![](https://cl.ly/jGj6/Screen%20Recording%202017-02-21%20at%2001.32%20PM.gif)

And there are also effects on these text components:

![](https://cl.ly/jGZF/Screen%20Shot%202017-02-21%20at%2012.53.30%20PM.png)

and

![](https://cl.ly/jGN5/Screen%20Shot%202017-02-21%20at%2012.53.39%20PM.png)

---

[Back to top ⬆](#personal-website)

## Phase 3: Hero Image

Update the homepage so it looks like this:

![](https://cl.ly/jGaJ/Screen%20Shot%202017-02-21%20at%201.15.52%20PM.png)

You can use any image you like, but keep the size/spacing accurate to the design.

**The navigation links (not included in the design spec--sorry) should go between the header and the picture.**

---

[Back to top ⬆](#personal-website)

## Phase 4: Navigation Toggle

By default, the navigation should be hidden. Clicking the "hamburger icon" should show/hide the navigation. Like so:

![](https://cl.ly/jG83/Screen%20Recording%202017-02-21%20at%2012.55%20PM.gif)

Notice that revealing the navigation does not push the rest of the page's content down. The navigation sits on top and covers the content below it (The content in this case would be the hero image from Phase 3).

---

[Back to top ⬆](#personal-website)

## Phase 5: Desktop Layout

Until this point, you've been instructed to completely ignore how the site looks at a wider-than-mobile device width. Time to start caring about it!

You will need to add this to your CSS to begin implementing a _responsive design_ (wherein the design adjusts based on the device's width):

```css
@media (min-width: 570px) {
}
```

Your task is to add CSS within this _media query_ that is meant to only be applied if the device/screen width is 570px or greater. For example:

```css
@media (min-width: 570px) {
    h1{
        font-size: 30px;
    }

    .navItem{
        position: absolute;
        top: 10px;
        left: 50%;
    }
}
```

In this example, I'm overriding any previously set `font-size` for `h1` elements. But the override is only activated if the device/screen width is 570px or greater.

So you are able to have multiple versions of CSS for the same page, where each version is meant for a particular device width. Well, that's not exactly true. The CSS which you've written so far is meant for _all_ widths. You're just adding CSS within the media query that will tweak things a bit when the device width hits a certain point.

If you need to more clarification, search YouTube for `media query introduction`. There's plenty of videos, but the best way to get into this is to just start building your first responsive design.

Here are the designs. Have fun!

![](https://cl.ly/jGeb/Screen%20Shot%202017-02-21%20at%201.17.00%20PM.png)

and

![](https://cl.ly/jG7Q/Screen%20Shot%202017-02-21%20at%201.07.36%20PM.png)

and did you notice that there is no more dynamic navigation? Makes sense, right; since there's plenty of space to always show the navigation now. Make sure you handle that part too.

---

[Back to top ⬆](#personal-website)

## Phase 6: Article Images

You should be able to add an optional image for each article that's written, so that articles on the homepage look like this:

![](https://cl.ly/jFpO/Screen%20Shot%202017-02-21%20at%201.18.10%20PM.png)

It's okay for an article to not have an image. If it doesn't, it should look just like it did before. Absence of an image should not break the design.

---

[Back to top ⬆](#personal-website)

### Phase 7: Identity

#### Color

Add some color! Check the notes on [choosing colors for a design](https://gist.github.com/sumeetjain/b042e1e8693348b06439be9db484986b) and _conservatively_ set some colors. I suggest keeping the white background but adding accent colors.

**Header**

![](https://cl.ly/jFhB/Screen%20Shot%202017-02-21%20at%202.56.29%20PM.png)

Definitely worth adding a color or two there.

**Hovers**

![](https://cl.ly/jGgf/Screen%20Shot%202017-02-21%20at%202.56.56%20PM.png)

Change up the hover color!

#### Image for _About_

You've got the hero image, so that's a start. Now add a different hero image to the About page. You shouldn't have to change much code for this--hopefully copy/pasting the style for the hero image from the homepage will work. Use a different image for the About page though--something professional but also fun and bold.

#### [Favicon](https://en.wikipedia.org/wiki/Favicon)

Add a fav icon of your face (or something)!

#### Fonts

You don't have to change these at all, but you might like to. Don't sacrifice readability for novelty though. Fonts are meant to be an *un-noticed facet of design*. If your visitor notices the fonts, your design has failed (because you've just distracted your user from the main purpose of the site: reading the content).

---

[Back to top ⬆](#personal-website)