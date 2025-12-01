/docs/components/sparkles-text.md

SparklesText

Component Overview
	•	Component Name: SparklesText
	•	Library Source: Magic UI (Text Animations)
	•	Purpose: This component renders text with a continuous sparkling effect, ideal for drawing attention to important text by surrounding it with animated star-like sparkles ￼. It is primarily used to highlight headings or keywords in a playful, dynamic way, solving the problem of making text visually engaging without using static graphics. The sparkles convey a sense of magic or excitement around the text.

Visual & Behavioral Description
	•	Structure: SparklesText wraps around plain text content and enhances it with an overlay of small star particles. The component itself typically renders as a span or div containing the text, with additional absolutely-positioned elements (or an SVG/canvas) representing the sparkles. It is a text-based effect – there are no extra card or container elements, just the text and the sparkles layered on top.
	•	Motion/Animation: The sparkles are generated continuously and fade in and out smoothly around the text ￼. They might appear one after another in random positions around each letter, creating a subtle twinkling animation. The transitions of sparkles are gentle (opacity or scale easing in/out) to mimic a sparkling star effect. The sparkles can be of multiple colors (by default a purple and pink combination) which alternate to enhance the visual interest ￼.
	•	Interactivity: This component’s animation runs automatically – users do not need to hover or click to see the effect. It is a non-interactive decorative effect. However, it does not hinder text selection or other interactions; the sparkles are typically pointer-events-none. One can wrap interactive text (like a link) with SparklesText to make a clickable, sparkling link. The sparkles themselves do not respond to pointer events.

Use Cases & Placement
	•	Where to Use: SparklesText is ideal for hero section headlines, branding taglines, or section titles where you want to inject energy and playfulness. For example, a personal portfolio might use it on the name or role title to make it stand out. It also works well on call-to-action text (e.g., “Hire Me” or “Welcome!”) to grab user attention. In documentation pages or blog posts, it can highlight a special term or new feature name.
	•	When Not to Use: Avoid using SparklesText for large bodies of text or any essential content that needs to be very readable. Overusing it (e.g., on multiple headings in one view) can be distracting and reduce performance. It should not be used in situations requiring a very professional or serious tone, as the sparkles impart a whimsical feel. If the page is already heavy with animations, adding sparkles to additional elements might feel overwhelming.
	•	Meaningful Motion Mapping: The sparkle animation conveys creativity, excitement, or a “magical” quality. Use it when you want to signify that something is special or joyful. For instance, a tagline like “Building awesome apps” with sparkles can imply enthusiasm and innovation. The motion of the sparkles can symbolize energy around the words. Ensure the sparkle colors match or complement the overall theme to maintain a coherent design mood (e.g., bright gold sparkles for a luxurious vibe, or multicolor for a fun vibe).

Props, API & Configuration

SparklesText accepts a few props to customize its behavior and styling:
	•	children (string, required): The text content to display with sparkles ￼. Typically you pass the text as children between the component tags, e.g. <SparklesText>Magic UI</SparklesText>.
	•	className (string, optional): Additional CSS classes for the outer wrapper. Use this to adjust the font size, font weight, color, etc., of the text. The sparkle elements inherit no specific text content, so styling is mainly for the text here ￼.
	•	sparklesCount (number, default: 10): How many sparkles are active at a time ￼. A higher number produces a denser sparkle field; a lower number is more subtle. Tweak this based on how prominent you want the effect and performance considerations.
	•	colors (object, default: {first: '#A07CFE', second: '#FE8FB5'}): An object with two color values for the sparkles ￼. The sparkles will alternate or randomly use these colors. By default, the first is a soft purple and the second a pink hue. You can customize these to suit your theme (e.g., golden and white for a starry effect, or any two contrasting colors).

There aren’t additional configuration props for animation timing – the sparkle generation rate and fade duration are handled internally. Styling can also be done via CSS; for instance, you could target sparkle elements in CSS if needed (though typically not required).

Example Usage:

import { SparklesText } from "@/components/ui/sparkles-text";

<SparklesText className="text-6xl font-bold text-center">
  Build it. Ship it. <span className="text-blue-500">Scale it.</span>
</SparklesText>

In this example, a large bold text is enhanced with sparkles. A part of the text (“Scale it.”) is colored differently in blue to show that standard HTML can be nested inside. The sparkles will surround all the content within the component.

Integration & Composition
	•	Combining with Other Components: SparklesText is primarily decorative and can wrap around text in any other component. For example, you can use it inside a hero banner that also includes a RetroGrid background. The combination of SparklesText for the heading and a RetroGrid animated background can produce a vibrant hero section: the grid provides a retro-tech atmosphere while the sparkles make the title pop. It also pairs well with components like HoverBorderGradient or ShineBorder when you want both text and surrounding elements to have animated effects (just be cautious not to clash visually).
	•	As Children vs. Wrapper: If you have a button or link and want its text to sparkle, you can wrap just the text in SparklesText. The rest of the button (background, padding) will remain normal, which usually looks better than animating the entire button. For example:

<button className="px-4 py-2 bg-gray-800 text-white">
  <SparklesText>Contact Me</SparklesText>
</button>

This way, the button’s label sparkles while the button styling remains intact.

	•	Dynamic Import: Since SparklesText is relatively light (a small effect), you typically don’t need to load it dynamically. However, if you were using many animated components on one page, you might consider dynamic importing some to reduce initial bundle size. SparklesText can be dynamically imported with Next.js like:

const SparklesText = dynamic(() => import("@/components/ui/sparkles-text").then(mod => mod.SparklesText), { ssr: false });

SSR can be disabled if the effect doesn’t need to show on the server-rendered HTML (not critical since it’s purely visual).

	•	Integration with Motion Libraries: Magic UI’s implementation already uses a motion library under the hood, so you don’t usually need to wrap SparklesText in a Framer Motion <motion.div>. But you can control higher-level container animations (like fading the whole section in) separately.

Accessibility & Performance
	•	Accessibility: Because SparklesText only adds decorative graphics, it should not interfere with screen readers. The text content is still plain children text, so it’s announced normally. Ensure you do not include any vital information solely in the sparkles (which are just visual). If the sparkles might be distracting for users with motion sensitivity, consider providing a toggle or honoring the CSS prefers-reduced-motion setting. You might achieve that by adding a CSS rule to not display or animate the sparkles when prefers-reduced-motion: reduce is set (Magic UI might not do this out of the box, so you can manually adjust by adding a utility class to stop animation in such cases).
	•	Performance: SparklesText is lightweight, but each sparkle is an element animating (via CSS or the web animation API). Ten sparkles (default) are usually fine even on mobile, but if you increase sparklesCount significantly, it could affect performance. Test on low-end devices if you plan to use a lot of sparkles. If the component is far down the page (initially off-screen), you don’t need to lazy-load it, but it also wouldn’t hurt to code-split it out if not used on most pages. In general, it’s performant enough for general use. Memory-wise, it just continuously repositions a fixed number of elements. Avoid using an extremely large text with sparklesCount maxed out, as overlapping a huge area with sparkles might drop frame rates.

Example Implementations
	•	Basic Example – Emphasizing a Title:

<h1 className="text-4xl font-extrabold">
  <SparklesText>Welcome to My Portfolio</SparklesText>
</h1>

Result: The H1 title “Welcome to My Portfolio” appears with twinkling sparkles around each letter, immediately drawing the eye ￼. This basic use requires no configuration beyond the default, and it’s perfect for a landing page headline.

	•	Enhanced Example – Sparkling Callout in Text:

<p className="text-lg">
  Our product has helped <SparklesText sparklesCount={5}>500+ developers</SparklesText> worldwide achieve their goals.
</p>

Result: In this paragraph, the number “500+ developers” is wrapped in SparklesText with a lower sparklesCount for subtlety. It gently sparkles, highlighting that statistic without overly disrupting the paragraph flow. We also could adjust the sparkle colors if needed (e.g., gold sparkles to symbolize achievement).

	•	Creative Example – Hero Section Combo: Imagine a hero section with a dark starry background. We can combine SparklesText with other components:

<div className="relative bg-black text-center py-20">
  {/* RetroGrid as background decorative grid */}
  <RetroGrid className="absolute inset-0 opacity-20" />
  {/* Sparkling title */}
  <h1 className="relative text-5xl text-white font-light">
    <SparklesText sparklesCount={15} colors={{first: '#ffffff', second: '#00FFD1'}}>
      Discover the Future
    </SparklesText>
  </h1>
  <p className="relative mt-4 text-gray-300">Innovative solutions for modern problems.</p>
</div>

Result: The combination of a faint retro grid in the background and a high-density white & aqua sparkles on the title gives a futuristic vibe. The sparkles’ movement symbolizes the “dynamic” future. This showcases how SparklesText can be part of a larger design.

Variants & Customization Ideas
	•	Color Variants: By default, sparkles use two preset colors. You can change the colors prop to achieve different themes. For instance, a “galaxy” variant might use soft blue and white sparkles on a dark background, whereas a “fairy dust” variant could use pastel pink and yellow. You could even make the colors cycle (though not built-in): for example, periodically update the colors prop via state or use multiple SparklesText with different colors layered if you want a rainbow sparkle effect.
	•	Sparkle Size & Shape: Magic UI’s implementation likely uses a fixed sparkle shape (circle or star SVG). While there isn’t a direct prop for size, you could override the sparkle element’s CSS (if you inspect, e.g., .sparkle class) to scale them. Alternatively, consider using a custom implementation for differently shaped sparkles (like star icons).
	•	Directional Sparkles: Currently, sparkles appear around all sides of text. If you wanted a variant where sparkles only trail from the right (as if the text is being “sparkled” while typed), you might need to implement a custom effect or modify the library. One idea: wrap each word or letter in a container and only allow sparkles on one side via CSS masking. This would be a custom extension rather than out-of-the-box.
	•	Intensity and Speed: There’s no direct prop for speed or lifespan of sparkles, but you could mimic a “faster” variant by using fewer sparkles that fade quicker (which would implicitly cause new sparkles to generate more often). If you dig into the source, you might find variables to adjust (like animation duration). For a more intense sparkle (all at once glitter burst), you could temporarily increase sparklesCount on an event (like on hover of text, set it higher, then back to normal on mouse out).
	•	Tailwind Utilities: Since the component exposes a className, you use Tailwind to style the underlying text. For example, adding tracking-wider or text-shadow-lg (if you have a text-shadow utility) could complement the sparkles. A slight text shadow behind white text can give the sparkles more contrast.

Related Components
	•	Shimmer Text (Animated Shiny Text): If you need a text highlight effect without particles, Magic UI’s AnimatedShinyText provides a light glare “shimmer” that sweeps across the text ￼. It’s more of a reflective shine vs. discrete sparkles. Use SparklesText for whimsical starry effects and ShimmerText for a polished sheen on text – both draw attention, but in different stylistic ways.
	•	Particles Background: Magic UI also has a Particles effect ￼ which generates floating particles (not necessarily tied to text). If you want an entire section to have floating sparkles or particles, you might use that as a background and regular text over it. In contrast, SparklesText attaches the effect directly to the text itself.
	•	Confetti & Meteors: These are other Magic UI special effects ￼. While confetti and sparkles both convey celebration, confetti is a one-time burst (e.g., after an event like form submission) whereas SparklesText is continuous. Meteors or other background effects can complement sparkles if used carefully (for instance, a meteor streaking across while text sparkles – but be cautious not to have too many competing motions).
	•	Aceternity UI Sparkles: Aceternity UI has a component simply called Sparkles (in Backgrounds & Effects) ￼. It’s a configurable sparkles effect used as a background or standalone decoration. If you needed sparkles not just around text but in a whole area, that could be considered. It’s more general, whereas SparklesText is purpose-built for text content.

Notes for AI Code Editor
	•	Use SparklesText for emphasizing short, impactful text (like “Hello, world!” headlines). When the AI code editor is asked to generate a creative hero section, consider wrapping the main headline in SparklesText to immediately catch the user’s eye.
	•	Prefer SparklesText over adding a static glitter graphic or GIF – it’s more lightweight and theme-consistent, and it allows the actual text to remain accessible and editable.
	•	Do not overuse multiple animated text components together. For example, avoid using SparklesText on two different headings on the same screen; it’s best paired with mostly static content around it so it remains a focal point. A good rule: one sparkly element per view is usually enough.
	•	If the page or section already has another attention-grabbing animation (like a big Lottie animation or auto-playing video), consider whether sparkly text might be too much. The AI should balance “wow factor” with usability – one major animated highlight per section.
	•	From a design tone perspective, SparklesText implies fun, creative, or celebratory context. The AI code editor should use it for portfolio sections that are meant to feel energetic and positive (e.g., a personal intro, a success metric highlight) and avoid it for very formal content (like terms and conditions text or a serious blog post).
	•	Implementation hint: The AI can always adjust the sparklesCount and colors to fit the scenario (e.g., use fewer sparkles for a subtle effect on smaller text like a button label, or more for a large hero word). The default colors work on light backgrounds; on dark backgrounds, switching to white or neon-colored sparkles will show up better. Always consider contrast with the background when choosing sparkle colors.

⸻

/docs/components/shimmer-text.md

ShimmerText

Component Overview
	•	Component Name: AnimatedShinyText (Magic UI) – often referred to as a shimmer text effect.
	•	Library Source: Magic UI (Text Animations)
	•	Purpose: This component applies a reflective “shine” or “glare” animation across text, making it appear as if light is sweeping over the text ￼. It’s useful for emphasizing text in a more sleek or “polished” way than sparkles – for example, to give a metallic or glossy text effect. The primary role is to draw attention to a piece of text (like a logo, heading, or callout) with a continuous or repeated shimmer that implies the text is shiny or highlighted. It solves the problem of making text stand out with motion while keeping the effect contained to the text’s fill or surface.

Visual & Behavioral Description
	•	Structure: AnimatedShinyText wraps children text similar to other text effects. Visually, the text looks normal except for a gradient or semi-transparent highlight layer that moves across it. The component often uses a pseudo-element or an SVG mask to create a slanted highlight that moves from one side of the text to the other. There are no extra visible structures like icons or borders – it’s a text-centered effect.
	•	Motion/Animation: A light beam or glossy sheen slides over the text from one direction to the other, repeatedly. This gives the illusion of light reflecting off the text (hence “shimmer”). The default animation is a left-to-right (or right-to-left) diagonal sweep of a bright highlight ￼. The motion is smooth and relatively slow, to mimic natural light glint. The shimmer often loops continuously, with a short delay between loops, creating an ongoing gentle animation.
	•	Interactivity: The shimmer animation runs automatically and does not require user interaction. In Magic UI’s implementation, the shimmer effect might respond to hover by speeding up or pausing (depending on configuration or styling) – for example, some implementations make the shimmer more pronounced on hover. However, out of the box, it’s generally a passive effect. Users don’t click or drag it; it’s purely visual. It also shouldn’t impede selecting the text.

Use Cases & Placement
	•	Where to Use: Use ShimmerText for headings or prominent labels where you want a slick, modern highlight. It works great for things like a product name, a logo text, or a key tagline on a techy landing page. For instance, a startup tagline “Fast. Secure. Reliable.” could have a shimmer to indicate quality and modernity. It’s also commonly used on loading screens or placeholders (a variation of shimmer effect is used to show content is loading – though that’s usually on blocks, not text, conceptually related). In a design system, if you have a hero section with a big bold title, adding a shimmer can add a high-end feel (think of movie posters or game titles that glint).
	•	When Not to Use: Avoid it for long paragraphs or any text that needs to be read quickly and without distraction – the moving highlight could be distracting across many lines. It’s not suitable for very small text (the effect wouldn’t be noticeable and might just appear as a flicker). Also, if you already have multiple animated elements (like multiple SparklesText or a background animation), adding shimmer on text might be excessive. For very formal or serious contexts (e.g., an about page describing serious research), a shimmer might feel out of place as it gives a somewhat “fancy”/glossy, possibly playful impression.
	•	Meaningful Motion Mapping: The shimmer’s motion suggests a reflection or spotlight passing over text. This can be associated with ideas like “premiere”, “special”, or “new”. It gives text a premium, polished feel – as if the words themselves are shiny. For example, if used on a portfolio title, it can imply that the person’s work is cutting-edge or high quality. If used on a button like “Get Started”, it might suggest urgency or importance (a subtle signal “click me, I’m important”). Make sure the motion aligns with the message – e.g., shimmering a word like “Exclusive” amplifies its exclusivity.

Props, API & Configuration

Magic UI’s AnimatedShinyText (ShimmerText) has a straightforward API:
	•	children (ReactNode, required): The text (or inline elements) to be rendered with the shimmer effect ￼. This is what will have the shiny highlight sweeping over it.
	•	className (string, optional): Classes to apply to the container wrapping the text ￼. Use this to set the font size, weight, color, etc. Usually, shimmer looks best on text with a solid fill color (white, gold, etc.) against a contrasting background so the shine is visible.
	•	shimmerWidth (number, default: 100): The width of the shimmer highlight in pixels ￼. This controls how thick the shining band is. A larger width means a broader, more gradual shine, whereas a smaller width makes a thin glint. Adjusting this changes how pronounced the effect is – e.g., a very thick shimmer might cover most of the text at once, a thin one might just look like a small light ray.

Magic UI does not expose direct control of the shimmer’s speed or angle via props; those are preset. However, the duration of the shine’s animation might be tied to the CSS (often the animation duration can be tweaked by overriding a CSS variable or class). If needed, you can override it in CSS using the className prop to target the internal element (for example, adding a custom CSS snippet like .my-shimmer > span { animation-duration: 3s; } if the structure is known).

Example Usage:

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

<AnimatedShinyText className="inline-block bg-black text-4xl text-white px-2">
  Shimmering Text
</AnimatedShinyText>

In this example, we have white text on a black background with some padding. The shimmer will appear as a white or slightly bluish light that glides over the words “Shimmering Text”. The inline-block and padding are added just to give the text some background; often you might place shimmer text on a section where the section’s background provides contrast.

Integration & Composition
	•	Layering Over Backgrounds: ShimmerText works well on its own, but ensure the background behind the text is plain or contrasty enough. For instance, if you place shimmering text on top of an image or a complex pattern, the shimmer highlight might get lost. A technique is to have a semi-transparent dark overlay behind the text if you must put it over an image. The AI code editor could generate a composition where AnimatedShinyText is used in a hero banner with a backdrop blur or dark overlay behind it, making the shine clear.
	•	Combining with Other Effects: It’s usually not necessary to combine ShimmerText with other text effects on the same element – e.g., don’t use both sparkles and shimmer on exactly the same text simultaneously. However, you can use different effects for different pieces of text on the same page. For example, a page could have a shimmering site title and a sparkling tagline. These can complement if used sparingly. If combining, maintain a design rationale (shimmer can denote something “polished”, sparkles something “magical”; perhaps the title is polished, and a keyword in the subtitle is magical).
	•	With Other Components: You can wrap AnimatedShinyText around text that is also a child of other components. A common use is wrapping an icon with text: e.g., <AnimatedShinyText><StarIcon/> Shine</AnimatedShinyText> – though the icon might also catch the shimmer highlight (depending on how the component is implemented). Another scenario: Using it inside a Button or Link. It’s generally fine to do so: <Link href="/pricing"><AnimatedShinyText>Pricing</AnimatedShinyText></Link>. That will create a shimmering link. Just remember that the shimmer might overflow slightly (if the highlight is larger than the text area); ensure parent containers have overflow: hidden if needed to clip the shine at boundaries (Magic UI’s default styling likely handles overflow to not bleed).
	•	Dynamic Import Consideration: The shimmer effect is also lightweight. Unless you’re using it on dozens of texts, dynamic importing is optional. If you do choose to dynamically import (perhaps for a mostly static page where only one header uses shimmer, you might decide it’s not critical for initial paint), you can do something like:

const ShimmerText = dynamic(() => import("@/components/ui/animated-shiny-text").then(mod => mod.AnimatedShinyText));

Then use <ShimmerText>…</ShimmerText>. But for most cases, you can include it in your main bundle without worry.

	•	Using with Framer Motion: If you want the whole text to animate in (for example, fade in from the bottom on page load) in addition to shimmering, wrap the component in a Framer Motion motion.div or apply motion to the parent container. Keep AnimatedShinyText as a child; it will continue to shimmer independently. This layering allows entrance animations + continuous shimmer concurrently.

Accessibility & Performance
	•	Accessibility: Shimmer text is still text. That means screen readers will read it normally. The animation is purely visual. However, be mindful of users with cognitive or vestibular disorders – moving highlights can be distracting. It’s usually a mild effect, but still consider respecting prefers-reduced-motion. If you choose to implement that, you could detect the preference in CSS and reduce the shimmer’s animation-play-state (e.g., pause it) when reduce-motion is requested. If Magic UI doesn’t do this by default, adding a small CSS snippet to disable the animation for those users would improve UX. Also, ensure sufficient contrast for the text itself. The shimmer typically adds brighter areas, which is fine, but the base text color against background must meet accessibility contrast when the shimmer isn’t over it. For example, white text on a light gray background relying on shimmer to occasionally make it readable is a bad idea – the text should be readable even without the shine.
	•	Performance: The shimmer effect is usually achieved with a CSS animation (often using background-image: linear-gradient or mask that moves). This is very performant since it leverages GPU for transform/opacity changes. It doesn’t create dozens of DOM elements like particle effects do – it’s just one element with an animated background. The performance impact is minimal even on mobile, as long as only a reasonable number of elements have it. If you had, say, 100 separate AnimatedShinyText instances on a page (which would be unusual), you might see performance issues, but for a typical use of one or a handful, it’s fine.
	•	Avoiding Jank: If you notice any jank, ensure that you’re not forcing reflows. The Magic UI implementation likely uses CSS keyframes for the shine. This means the main cost is repaints of that element. Having a very large text with a large shimmerWidth might cause a bigger area to repaint. Test on low-end devices if you are using it in a hero with huge font sizes. To optimize, you could slightly reduce the frame rate of the CSS animation (some libraries allow animation-timing-function steps or such) or reduce the area by clipping overflow. But these are rarely needed.

Example Implementations
	•	Basic Example – Shiny Heading:

<h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
  <AnimatedShinyText>Our Services</AnimatedShinyText>
</h2>

Result: The heading “Our Services” will have a subtle light glide across it every few seconds ￼. The rest of the styling (font size, color) is given by the surrounding classes. Against a dark background (dark:text-gray-100), the shimmer will appear as a white glow moving over white text – a bit subtle. Against a light mode (text-gray-900), if the shimmer uses a white highlight, it might be less visible on near-black text (white shine on black is visible though, like a specular highlight). This is a simple integration needing no extra configuration.

	•	Enhanced Example – Gradient Shimmer:
Imagine you want the text to also have a gradient color, not just the shimmer. Since AnimatedShinyText doesn’t inherently color the text, you can combine it with Tailwind’s bg-clip-text and text-transparent technique:

<h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
  <AnimatedShinyText className="inline-block">
    Welcome Aboard
  </AnimatedShinyText>
</h1>

Result: The text “Welcome Aboard” displays as a gold-to-red gradient fill text, and on top of that, a light shimmer runs across ￼. The combination gives a fiery, metallic effect (like light reflecting on a gold surface). The inline-block on the shiny text ensures the gradient background applies correctly to that span. This shows you can still use text color styling in conjunction with shimmer.

	•	Creative Example – Shimmering Button Label:

<button className="relative px-6 py-3 bg-blue-600 overflow-hidden">
  <AnimatedShinyText className="relative text-white">
    Download Now
  </AnimatedShinyText>
</button>

Result: A call-to-action button “Download Now” with a blue background and white text that shimmers. The overflow-hidden on the button ensures the shimmer highlight doesn’t spill outside the button’s rounded corners if any. This usage draws extra attention to the button without needing an icon. It feels a bit like a glossy button. When the user hovers, you could even stop the shimmer and maybe change the text color to signify actionable feedback (or conversely, speed up the shimmer on hover for a quick “shine” as hover feedback). This example demonstrates using shimmer text in interactive elements carefully.

Variants & Customization Ideas
	•	Gradient Shine: By default, the shimmer highlight might be a single color (often white or light color). You could customize it to be a gradient shine (e.g., a rainbow shine passing over text). This would require editing the CSS of the component – possibly by overriding the background-image used for the shine. For example, if the internal structure allows, you might add a class that sets --shine-gradient: linear-gradient(90deg, red, orange, yellow, green, blue). A multi-colored shimmer could give a playful effect (imagine a holographic foil look).
	•	Shimmer Angle and Direction: The standard shimmer often goes diagonally. A variant could be horizontal or vertical. Although not exposed via prop, one could override the CSS rotation of the shine element or the keyframes. For instance, to get a top-to-bottom shimmer (as if a light scanning down), you’d adjust the gradient or mask angle. This would be an advanced customization by digging into the component’s CSS. Similarly, reversing direction (right-to-left) might be as simple as adding a CSS rule to reverse the animation direction or using animation-direction: reverse.
	•	Speed Variations: If you want a more subtle slow glimmer vs. a quick flash, you can override the animation duration via CSS. E.g., .slow-shimmer span::before { animation-duration: 5s !important; }. On the other hand, a quick repeated shimmer might indicate something is “on fire” or “electric”. In certain themes (like a cyberpunk theme), a faster neon shimmer might be stylistically appropriate.
	•	Combining with Text Shadow: To really emphasize the shiny feel, adding a faint text-shadow that changes as the shimmer passes can look cool. While not built-in, you can simulate it: have two layers of the text, one with a blur that’s masked by the shimmer. That’s complex, but simpler: just adding a constant subtle text-shadow (like a glow) to the text plus the shimmer effect can make the text look like it’s glowing and shining. For example, white text with a blue text-shadow plus a white shimmer might appear like an electric glow when the shimmer goes by.
	•	Skeleton Loading Use: While AnimatedShinyText is meant for actual text content, the shimmer concept is famously used in skeleton loaders (gray bars that shimmer). If you had a scenario where you want a text placeholder shimmering until real text loads, you might adapt this component by setting the children to something like “████” (block characters) and letting it shimmer. However, Magic UI’s shimmer text might not be intended as a skeleton loader, since it assumes meaningful text is there. It’s just an idea that a similar effect can be repurposed for loading states (with different styling).

Related Components
	•	SparklesText ↔ ShimmerText: These two go hand-in-hand as alternative text emphasis options. SparklesText uses discrete animated particles ￼, whereas ShimmerText (AnimatedShinyText) uses a continuous gradient highlight ￼. Both can be used to draw attention; Sparkles is more whimsical, Shimmer is more polished. In a design system, you might decide to use one or the other for consistency. For example, use Shimmer for product names or logos (for a slick effect), and use Sparkles for special offers or celebratory messages.
	•	Text Highlighter: Magic UI has a “Text Highlighter” component ￼ (possibly referring to something that highlights substrings or animates underline). While shimmer makes the whole text shiny, a text highlighter might underline or color the text dynamically. If a use-case calls for emphasizing text by background highlighting (like an animated marker effect), that would be a different approach than shimmer. One might choose ShimmerText vs an underline highlight depending on whether a “light reflection” aesthetic or a “marked emphasis” aesthetic is desired.
	•	Glowing Effect (Motion-Primitives or Aceternity’s Glow): Aceternity UI and Motion-Primitives have “Glow” effects ￼ ￼. A glow typically surrounds an element with a constant or pulsing aura. If you want text to have a steady glow rather than a moving shimmer, a glow component might be used (or a simple CSS text-shadow). Glow keeps constant emphasis, shimmer provides moving emphasis. They could even be combined (a glowing piece of text with an occasional shimmer) if done subtly.
	•	AnimatedGradientText: Magic UI offers AnimatedGradientText which changes the text’s color gradient over time ￼. That’s yet another way to animate text. Compared to shimmer (which is a light overlay), an animated gradient actually changes the color of the text itself. Both are eye-catching; animated gradient cycles through colors (good for multi-color themes), whereas shimmer is basically a highlight on a static color. Consider these related components when deciding the style of emphasis: for a vibrant multi-color look use AnimatedGradientText, for a classy shine use ShimmerText.

Notes for AI Code Editor
	•	Use ShimmerText for a modern, sleek feel in UI generation. For example, when the user asks for a “futuristic” or “high-tech” look, shimmering text for the main headline can reinforce that style.
	•	Ensure that the AI doesn’t put shimmer on too many elements. A good practice: one shimmer effect visible at a time. It could be the logo or the main call-to-action, but rarely both. If the user specifically mentions making something “stand out” or “shine”, AnimatedShinyText is a great choice, but don’t literally apply it everywhere they used the word “shine” unless it makes sense.
	•	When generating code, remember to import the component from the correct registry or package (@magicui/animated-shiny-text). The AI assistant should check if the template/project already has it; since in this hypothetical, it’s part of our docs, assume it’s available to import.
	•	Avoid using ShimmerText on very small text (e.g., on a label inside a form input or on a caption). The AI should choose it for medium to large text that benefits from a highlight. For small text, the shimmer won’t be discernible and might just cause a slight flicker. The user experience is better if the shimmer is on something like a header, not on 12px footnote.
	•	In markdown or documentation generation tasks, if asked to emphasize something, the AI should not spontaneously use ShimmerText unless a visual output is expected (since in plain markdown the effect won’t show). But in code generation for a UI, it’s absolutely an option to consider for emphasis.
	•	The AI should keep in mind theming: if generating dark mode variants, mention that shimmer might need different base text color in dark vs light (e.g., shimmering white text on dark vs shimmering black text on light). Possibly suggest the user to adjust gradientColor prop based on theme (as shown in the MagicCard example where they did gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} – similarly, for shimmer, if it had such prop, one could do that). Currently, AnimatedShinyText doesn’t have a direct theme prop, but the text color itself will likely be set via className. So instructing or generating code that sets an appropriate text color in both themes is good practice (like using Tailwind’s dark: classes as in the example).

⸻

/docs/components/hover-border-gradient.md

HoverBorderGradient

Component Overview
	•	Component Name: HoverBorderGradient
	•	Library Source: Aceternity UI (Buttons/Hover Effects)
	•	Purpose: This component provides a gradient border effect that animates on hover, wrapping around any given content (often a button or card) ￼. Its purpose is to make an element stand out with an interactive border that draws the user’s attention when they hover over it. It solves the problem of adding a fancy hover state without having to write custom CSS for complex border animations. In modern UIs, gradient borders are popular for highlighting interactive elements, and this component encapsulates that behavior in a reusable way.

Visual & Behavioral Description
	•	Structure: HoverBorderGradient acts as a wrapper around any content (text, button, link, etc.). Structurally, it renders an element (default is a <button> or a container div) that contains the child content. Visually, when not hovered, the component might display a subtle border or no border at all. On hover, a multi-colored gradient border becomes visible and often expands or shines. Internally, it likely uses pseudo-elements or background gradients positioned around the content’s perimeter. The gradient can cover the entire border of the element. The child content (like a link or button text) is rendered inside this container normally.
	•	Motion/Animation: The gradient border typically has an animation cycle – for example, on hover, the gradient might “sweep” around the edges or simply fade in and continuously rotate colors. According to documentation, the gradient rotation direction can be configured (clockwise or counterclockwise) ￼. By default, when you hover, you might see the border gradient start at one edge and animate to cover all sides (giving an expanding outline effect), and possibly the gradient itself might rotate or change over time if the duration is set. If you stop hovering, the gradient might shrink away or fade out. The motion is smooth and usually runs over the course of 1 second (default duration) for a full cycle ￼. This gives a dynamic neon-border effect that loops while hovered.
	•	Interactivity: It’s explicitly a hover-triggered effect. Users see the full gradient border only when their cursor is over the component (or focused, in case of keyboard focus – it should ideally handle focus to be accessible). On hover, besides the border appearing, it doesn’t typically change the child content (the content inside remains the same, although you might style the inner link or text on hover as well). The component likely has an asChild or as prop that allows the child element to handle events; for example, if the child is an <a> tag, the gradient wraps it without breaking its click. So interactivity wise: the user can click the link or button inside as normal; HoverBorderGradient just augments the visuals on hover.

Use Cases & Placement
	•	Where to Use: This is perfect for call-to-action buttons, interactive cards, or any element that you want to have a high-visibility hover state. For instance, on a portfolio site, the “Contact Me” or “Hire Me” button could use a HoverBorderGradient to give it a futuristic glowing border when hovered. It’s also great for feature boxes or skill cards – when a user hovers over a skill or project card, a gradient border appears, indicating interactivity. Another use: in a navigation menu, the currently hovered menu item could get a gradient underline or border via this component, making the UI feel more dynamic.
	•	When Not to Use: Avoid using gradient hover borders on elements that are already very visually busy or in contexts where a subtle interface is needed. For example, using this on every button in a minimalist design could feel out of place. Also, if the background itself is very colorful or has gradients, a gradient border might clash or become less visible. Performance-wise, it’s lightweight, but you wouldn’t use it on a huge grid of 50 elements all at once (that would be visually overwhelming for the user). In forms with many fields, for instance, giving every field a hover gradient border could be distracting – better to reserve it for key interactive highlights.
	•	Meaningful Motion Mapping: The gradient border conveys a sense of activity and modern flair. It can imply that the element is “energized” or important. For example, a neon gradient border on a “Download” button can suggest a tech-forward, glowing effect – fitting for tech or creative sites. The motion of the gradient (rotating colors around the border) can symbolize progression or a cycle, which might subconsciously hint at “there’s more on hover” or “click me, I do something cool”. Ensure the gradient colors align with brand meaning: e.g., a blue-purple gradient might feel calming/techy, whereas a rainbow gradient feels playful.

Props, API & Configuration

HoverBorderGradient comes with several props to configure its behavior and integrate it with different elements ￼:
	•	children (React.ReactNode, required): The content to wrap with the hover gradient effect ￼. This is typically a single child element like a button or anchor. The child will be rendered inside the gradient border container.
	•	containerClassName (string?, optional): Additional CSS class names for the outer container ￼. This allows styling of the element that holds the gradient border. For example, you might set a fixed width/height or padding here. If you want to adjust the border’s appearance via custom CSS (like border-radius), you’d also apply it to this container.
	•	className (string?, optional): Additional class for the inner content ￼. Since the child is being wrapped, the library might transfer this class to the content or an inner wrapper. This is useful if the child is text or inline element that you want to style (e.g., adding typography classes or spacing).
	•	as (React.ElementType?, default: "button"): The HTML element type of the container that will carry the gradient border ￼. By default, it renders as a <button> element. If you set as="div" or as="span", it will use that instead. A common pattern is asChild (not listed as prop but often present via Radix utility) to merge with child – here, they explicitly give an as prop. For example, if you want to wrap an anchor <a> without introducing an extra DOM element, you might set as="a" and provide the href, or use asChild to let the child anchor be the base element.
	•	duration (number?, default: 1): Duration of the animation cycle in seconds ￼. This controls how fast the gradient border’s animation completes one loop. A 1 second duration means the gradient likely makes a full rotation or sweep in 1 second. Increase it (e.g., 2 or 3) for a slower, more gentle animation; decrease it for a fast, attention-grabbing flash.
	•	clockwise (boolean?, default: true): Determines the direction of gradient rotation ￼. If true (default), the gradient might rotate in one direction (say, clockwise around the border); if false, it would rotate in the opposite direction. This is a subtle visual difference but can be used to match a design motif or simply personal preference. Setting clockwise={false} makes the animation reverse direction.
	•	...buttonProps (React.HTMLAttributes<HTMLElement>): Spread any other native props onto the container element ￼. For example, if the container is a button, you might pass onClick, disabled, etc., and those would apply to the outer element. This prop handling means you can treat HoverBorderGradient similarly to a regular <button> or <a> in terms of attributes.

Example Usage:
	1.	Wrapping a button (default usage):

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

<HoverBorderGradient>
  <span className="px-4 py-2 text-sm font-medium text-white">Contact Me</span>
</HoverBorderGradient>

Here, we didn’t specify as, so it defaults to a button. We put a <span> inside just to hold text with some padding and styling. On hover, the border around the span (the container) will animate with a gradient. If we wanted the whole thing clickable, we might just put text and rely on the default button nature of the container. Alternatively:

<HoverBorderGradient as="a" href="/contact" className="px-4 py-2 text-sm font-medium text-white">
  Contact Me
</HoverBorderGradient>

This uses as to make the container an <a> tag linking to “/contact”. We also passed className which likely is applied to the inner content (so the anchor text is styled). The result is a hyperlink that shows a rotating gradient border on hover, looking like a fancy bordered button.

	2.	Using asChild pattern (if supported):
If HoverBorderGradient supports an asChild prop (common in some libraries to avoid extra DOM), usage might be:

<HoverBorderGradient asChild>
  <button className="px-4 py-2 text-sm font-medium relative">Sign Up</button>
</HoverBorderGradient>

This would essentially apply the gradient to the button itself, rather than wrapping another element. The documentation doesn’t list asChild, so the above default patterns are recommended (using as or just wrapping content).

Integration & Composition
	•	Combining with Buttons & Links: HoverBorderGradient is primarily meant to enhance a single interactive element. It’s designed to be a wrapper, so you typically use it in place of your normal <button> or <a>. Integration is straightforward: replace <button class="someClass">Label</button> with <HoverBorderGradient><button ...>Label</button></HoverBorderGradient> if you want to keep semantic button, or <HoverBorderGradient as="button">Label</HoverBorderGradient> using the component’s built-in element. Since it passes through event handlers, you can use it for form submission buttons, etc. Just ensure not to double up – e.g., don’t nest a button inside a button (that’s invalid HTML). Prefer the as prop to avoid that.
	•	Nesting Content: You can put more than just text inside. For example, a button with an icon:

<HoverBorderGradient>
  <div className="flex items-center px-3 py-2 text-white">
    <DownloadIcon className="mr-2" /> <span>Download</span>
  </div>
</HoverBorderGradient>

This yields a nice pill that, on hover, gets a gradient border around the entire <div> that contains icon and text. The component doesn’t interfere with internal layout; it simply encloses it.

	•	Layout Considerations: If you have a navigation bar with multiple HoverBorderGradient items, each will show its border on hover independently. This is fine. If you want a shared effect (like a single moving underline that moves to whichever item is hovered, as some menus do), HoverBorderGradient wouldn’t handle that – that’s a different pattern (one element moving). HoverBorderGradient is more for self-contained elements.
	•	Combining with other components: It can wrap other Magic UI or Aceternity UI components if they are essentially content. For instance, wrapping a ShinyButton or StatefulButton could be redundant (they might have their own styles), but wrapping a plain card or image could create a cool effect like an image with a glowing frame on hover. If you had a plain card listing a project, you could do: <HoverBorderGradient><ProjectCard /></HoverBorderGradient> to give that card a hover glow. Just be cautious: if the inner component already has padding and background, ensure the border is visible (you might need some transparent margin or so if the inner background covers the border area).
	•	Dynamic Import & Performance: It’s usually not necessary to dynamically import HoverBorderGradient unless you find it’s not used on initial page loads. If you have dozens of such buttons, it might be in your main bundle anyway. Composition-wise, it’s more about styling than heavy logic, so it shouldn’t significantly bloat the bundle. But certainly, you could code-split it if you only use it on one or two pages out of many. For example, the portfolio’s contact section might use it; you can lazy load that section’s components.
	•	Styling the Gradient: The component doesn’t expose props for colors; it presumably has a default gradient (maybe brand colors or rainbow). To customize the gradient colors, you currently would override via CSS. For example, if it sets a background-image on :before, you could target .yourClass:before { background: linear-gradient(...your colors...) !important; }. In integration, if brand consistency is key, you may want to write a small CSS snippet to adjust the gradient used.

Accessibility & Performance
	•	Accessibility: The HoverBorderGradient itself is a non-semantic wrapper by default (unless using as="button" or similar). If using as a button or link, it should behave like one. Ensure to include proper ARIA labels or roles if needed (for example, if using a div with onClick inside, that’s not good for accessibility – better to use actual button or a). The component likely forwards ref and focus, so keyboard users tabbing to the button should also trigger a focus-visible style (hopefully the gradient appears on focus too). If not, you might want to add a focus:outline-none on the inner and rely on the border gradient as a focus indicator. Check that or add an explicit focus style: e.g., .focus\:border-opacity-100 on the container to force the border visible on focus. Currently, by default, it likely shows on hover and maybe on focus if CSS is written correctly.
	•	Reduced Motion: This is a hover-only animation; users with reduced-motion preference generally still experience hover states. However, if someone prefers reduced motion, a rapidly animating border could be somewhat bothersome. It’s low-risk since it only animates on deliberate hover. But you could consider respecting the setting by disabling the rotation (maybe just show a static gradient border on hover instead of an animated one). This isn’t built-in, so you would add a CSS @media (prefers-reduced-motion) override to pause the animation.
	•	Performance: The gradient border effect is achieved likely with CSS animations of background-position or CSS variables over 1 second loops. This is handled by the GPU fairly well and only active on hover (so most of the time, nothing is animating when not hovered). Even when looping during hover, a single gradient border animation is not performance heavy. If you had, say, 20 buttons all hovered at once (unlikely in real use, since one cursor can only hover one thing at a time), it could stack up, but typically it’s fine. The painting of a gradient might cause some minor paint work, but given modern browsers, this is trivial for a single element. Memory footprint is minimal (some extra DOM wrappers).
	•	Size & Responsiveness: The border expands the container slightly if it’s drawn outside the element’s bounds. The component likely ensures the border doesn’t shift layout (maybe it draws the border within using an overlay). If not, you might want to have box-sizing: border-box to include the border in element size. The docs example shows it as overlay, so probably layout is stable. But if you notice layout jump on hover, you might need to adjust (like adding a transparent border of equal thickness initially). This is a small detail; presumably the library handles it by absolutely positioning the gradient overlay.

Example Implementations
	•	Basic Example – Gradient Hover Button:

<HoverBorderGradient>
  <button className="px-5 py-2 text-lg font-semibold text-gray-900">
    Learn More
  </button>
</HoverBorderGradient>

Result: A medium-sized “Learn More” button with a simple styling (dark text on light background) will show no border initially. On hover, a colorful gradient border (for example, a purple-pink-orange blend) will appear around it, possibly with a slight animation ￼. This immediately indicates it’s clickable. If the site’s design is minimalistic, this adds a nice accent just on hover without cluttering the default state.

	•	Enhanced Example – Using as Anchor:

<HoverBorderGradient as="a" href="/projects" containerClassName="rounded-md">
  <span className="block px-4 py-2 text-white bg-gray-800 rounded-md">
    View Projects
  </span>
</HoverBorderGradient>

Result: This creates a link (styled as a button) with white text on gray background, with nicely rounded corners. We explicitly set containerClassName="rounded-md" so that the gradient border also follows the same rounded corners (ensuring the gradient overlay is clipped to that shape). On hover, a gradient border outlines the button with matching curvature, making it look like the button is glowing at its edges. This demonstrates maintaining border radius and using the component for links.

	•	Creative Example – Card with Gradient Frame:
Suppose we have a profile card component:

<HoverBorderGradient containerClassName="rounded-xl shadow-lg transition-transform" className="block">
  <div className="p-6 bg-white rounded-xl">
    <h3 className="text-xl font-bold">Jane Doe</h3>
    <p>Full Stack Developer</p>
  </div>
</HoverBorderGradient>

Result: The profile card is white with a subtle shadow. We added transition-transform to container to perhaps scale up a bit on hover. When the user hovers, not only can we scale the card slightly (via custom CSS), but the HoverBorderGradient will add a vibrant border around the card’s rounded outline. This makes the card feel interactive (maybe it’s clickable to view more details). The gradient border appears only on hover, so multiple cards on the page will each highlight as you move the mouse over them one by one, guiding focus. The effect is that of a high-quality interactive list of cards.

Variants & Customization Ideas
	•	Color Customization: The default gradient might not fit every brand. While the component doesn’t have a prop for colors, you can override the CSS. For example, adding a custom CSS rule:

.HoverBorderGradient-custom::before {
  background: conic-gradient(from 0deg at 50% 50%, #00FFFF, #FF00FF, #00FFFF);
}

This would create a cyan-magenta-cyan gradient loop (just an example). You could then apply containerClassName="HoverBorderGradient-custom" to use that style. Alternatively, if the library uses CSS variables for colors, set those variables in your class. By customizing colors, you can create variants: e.g., a “rainbow border” vs a “blue border” variant of the component.

	•	Thickness & Style: If you want a thicker or thinner border, see if the component respects the child’s border style. Possibly, the gradient is drawn at a fixed 2px or similar. You might override by giving the container a border-width and making sure the gradient overlay matches it. If not straightforward, wrapping your content in a div with padding equal to desired border thickness could simulate a thicker border area for the gradient to show. That said, direct control might need going into the library’s CSS. A variant idea: a “thick neon frame” variant for a cyberpunk theme (maybe a 4px glowing border).
	•	Animation Variants: With the duration prop, you already can slow or speed the animation. If you wanted a non-continuous variant (e.g., border appears with a quick flash then stays static), you could potentially set duration very high so that rotation is imperceptible, essentially giving a static gradient on hover after the initial expansion. Or, conversely, set it low for a rapid strobe (though strobing gradients might be harsh on the eyes). Another variant: alternating direction – you could randomize or alternate the clockwise prop on each hover event (maybe by toggling state in a parent component) to get a back-and-forth motion, albeit this is a bit extra.
	•	Permanent Gradient vs On-Hover: If you love the gradient frame look and want it always visible (not just on hover), this component might not be the direct solution because it’s specifically for hover. However, you could simulate it by applying it and then using CSS to force the :before (or whatever draws the border) to be visible all the time. Or simpler: use it as hover effect but also apply it on the element that is “active” or “selected”. For instance, a nav menu item that corresponds to the current page – you might want it highlighted with gradient border persistently. You could add a class to that item to always show the border (some components provide an active state prop or you can override the styles to not hide when not hovered if a certain class is present). This goes beyond props, requiring custom CSS injection.
	•	Shadow + Gradient: A creative variant is combining gradient borders with drop shadows. For example, a card could have a subtle shadow by default, and on hover, not only does the gradient border show, but maybe the shadow color changes or intensifies (perhaps even taking on the gradient colors via a spread). While HoverBorderGradient won’t manage shadows, you can handle that with Tailwind transitions on the wrapper (like we added transition-transform and you could add hover:shadow-[0_0_15px_var(--tw-gradient-stops)] if you craft a gradient shadow). This can amplify the glow effect.

Related Components
	•	ShineBorder (Magic UI): Magic UI has a ShineBorder component, which also provides an animated border effect ￼ ￼. ShineBorder is an always-on effect (not just on hover) where a gradient or shine continuously moves around a border. It’s great for continuously drawing attention. In contrast, HoverBorderGradient specifically triggers on hover to indicate interactivity. They have similar visuals but different use-cases. You might cross-reference these: use HoverBorderGradient for interactive hover feedback, and ShineBorder for a constantly animated border (like around a featured content card).
	•	BorderBeam (Magic UI): BorderBeam is another Magic UI special effect where beams of light travel around the border ￼. It’s somewhat similar in concept (animated border on loop). If someone is looking for a fancier, more complex border animation that’s not just a gradient but actual beam segments, BorderBeam might be a related solution. It’s not on hover, but one could combine it with hover by controlling when it runs. For purely hover-based, stick to HoverBorderGradient for simplicity.
	•	Moving Border (Aceternity UI): In Aceternity’s list, there is “Moving Border” ￼ which sounds like another variant of an animated border effect (possibly it continuously moves, or changes shape). This could be an always-animated border that may or may not be tied to hover. If an always-moving border is acceptable, one could use Moving Border. But for hover-specific, HoverBorderGradient is the go-to. It’s good to know alternatives if design calls for persistent animation vs on-demand.
	•	Hover Card (Radix UI concept vs here): Not to confuse, Radix UI uses “HoverCard” to mean a popover that appears on hover. That’s a different concept (like a tooltip preview on hover). Aceternity/MagicUI’s usage of “Hover” in name usually indicates style effects. So, HoverBorderGradient is styling; if you needed something like an interactive card that shows more info on hover, you’d use other components or custom code (like a card that flips or expands). So related in name but not function: just a clarification for developers who might recall the Radix HoverCard – that one shows content on hover, whereas this shows a border on hover.

Notes for AI Code Editor
	•	The AI should use HoverBorderGradient when it wants to make a particular button or small container highly visually interactive on hover. For instance, if a user prompt says “Make the call-to-action really pop on hover,” wrapping it in HoverBorderGradient is a good solution.
	•	Remember to ensure the inner element is properly set. A common mistake would be generating <HoverBorderGradient>Click Me</HoverBorderGradient> without a proper child element. That would likely not render the text (since children expected to be ReactNode inside, plain text might work but not sure if it wraps it in a span). Safer to always include a span or button inside.
	•	Another point: ensure that if using as a link or button, to utilize the as prop or proper semantic element. The AI should avoid creating invalid HTML like a button inside a button. Use as="a" or as="button" appropriately. When uncertain, using a div inside and letting the default be button is okay, but if the content is purely text, maybe default button is fine.
	•	Encourage the AI’s generated code to include necessary styling on the inner element (padding, text color) because the gradient border alone won’t show if the inner content has no background or padding. In other words, a gradient border around a zero-size element is invisible. So in examples, we often provide padding via the child. The documentation doesn’t explicitly say the component adds padding, so the developer must style the content accordingly. The AI should demonstrate that in code (like we did in examples with px-4 py-2, etc.).
	•	If the design has multiple important buttons (like primary and secondary), using gradient border on all might be too much. The AI might decide to use it only for the primary action, and leave secondary actions with a simpler style. That nuance could be mentioned: e.g., “Use HoverBorderGradient for the primary call-to-action for maximum emphasis, but keep secondary buttons understated for contrast.” This is more design advice, but something an AI assistant could hint at.
	•	Also note that gradient borders often look best on dark backgrounds or with dark inner content. If the AI is asked to produce a light-themed section, a subtle gradient might not be as visible on white. The AI might choose a more contrasting gradient or a different effect in that case (maybe a subtle shadow or underline). Basically, HoverBorderGradient shines (pun intended) in somewhat dark or colored UI contexts. It can work on light, but e.g., a pastel gradient on white is hard to see. So the AI should either adjust the gradient via custom class or ensure contrast.
	•	Finally, from a coding perspective: if working within Next.js or similar, after using pnpm dlx shadcn@latest add @aceternity/hover-border-gradient, the component should be available at the path given (like “@/components/ui/hover-border-gradient”). The AI code editor should import and use it directly, assuming the environment is configured. It should not attempt to re-implement the effect from scratch when the library is available – leverage it as intended.

⸻

/docs/components/retro-grid.md

RetroGrid

Component Overview
	•	Component Name: RetroGrid
	•	Library Source: Magic UI (Backgrounds)
	•	Purpose: RetroGrid generates an animated grid background reminiscent of 1980s “retro” graphics (think Tron or old arcade graphics) ￼. Its purpose is to serve as a decorative background or section backdrop that gives a retro-futuristic aesthetic. It solves the need for a quick way to add a dynamic grid pattern that conveys a techy, nostalgic vibe without manually coding SVGs or animations. In a modern UI, it’s often used to make hero sections or banners more visually engaging by adding depth (the grid receding or scrolling gives a sense of 3D space).

Visual & Behavioral Description
	•	Structure: RetroGrid is a standalone background component. Visually, it appears as a grid of lines (probably horizontal lines with perspective, and vertical lines forming a wireframe grid). The grid usually has a vanishing point effect – e.g., the lines might converge or rotate to give a perspective as if you’re looking at a floor grid extending into the distance. The component likely renders an absolutely positioned <canvas> or <svg> or uses divs with CSS to create the pattern. There are no text or content layers by default; it’s purely graphical. Typically, you’ll place this component inside a container with position: relative and maybe behind text, as it’s an effect layer.
	•	Motion/Animation: The grid is animated to scroll, giving the illusion that the viewer is moving over it or that the grid is moving under the viewer ￼. The animation might be a continuous translation of the grid lines downward (for a floor-like grid) or some kind of subtle pulsation. Magic UI describes it as “animated scrolling retro grid” ￼. Often this means the horizontal lines move (e.g., new lines appear at top as old ones disappear at bottom) to simulate motion. The rotation angle of the grid and opacity may also be fixed, but the lines themselves likely move. The movement is typically slow and looped, reinforcing the idea of an infinite grid. The animation doesn’t usually respond to user input – it’s background ambiance.
	•	Interactivity: RetroGrid itself isn’t interactive. It runs in the background, silently animating. Users do not click or hover on it (in fact, you’ll often want it to be non-interactive by CSS, like pointer-events: none, so it doesn’t block clicks to content above it). The only “interaction” might be if you tie its animation speed to scroll (some designs slow a background when scrolling for effect, but out of the box, RetroGrid likely just animates at a constant rate).

Use Cases & Placement
	•	Where to Use: It’s perfect as a hero section background, especially for a personal portfolio with a theme of retro computing, synthwave, or just a playful tech vibe. For example, placing RetroGrid behind a centered heading can create a cool intro section. It can also be used as a section divider or background for a quote section to give it visual interest. Another use: backgrounds of cards or banners, but typically it shines (figuratively) when it has space – like a full-width, moderately tall section. Because of its perspective nature, it looks like a “floor”, so it pairs well with content that sits above it (like text seeming to float above a grid floor).
	•	When Not to Use: Avoid using RetroGrid in contexts that require a clean, minimal, or serious tone – it’s quite stylized and can clash with corporate or strictly modern flat designs. It also shouldn’t be overlaid with too many other patterns; if you already have a busy background or images, adding the grid could make it chaotic. If the section has a lot of text content that needs high contrast readability, a bright grid might interfere (though usually the grid lines are semi-transparent). Also not ideal for small containers because the effect of the perspective grid may not come across in a tiny area (it could just look like weird lines). So skip it for card backgrounds or very short sections.
	•	Meaningful Motion Mapping: The scrolling grid conveys motion and depth – it can symbolize progress, moving forward, or being on a journey (like traveling through a virtual space). The retro aspect might evoke nostalgia or playfulness. If a portfolio’s theme is about one’s journey through tech, the moving grid background can metaphorically support that story. The motion is gentle and not tied to user action, which tends to create a “living background” feel rather than conveying specific information. It mostly sets a mood.

Props, API & Configuration

Magic UI’s RetroGrid exposes a few props to tweak the appearance of the grid ￼:
	•	className (string, optional): Additional CSS classes for the grid container ￼. This can be used to position it (e.g., absolute inset-0 for full coverage), set sizing, or mix in additional styles like mix-blend-mode or opacity. By default, the component likely has its own dimensions (perhaps it expands to parent width/height).
	•	angle (number, default: 65): Rotation angle of the grid in degrees ￼. This probably tilts the grid. By default 65 degrees – meaning the grid is tilted back as if forming a floor plane at a 65° angle to the viewpoint. Changing this angle will change the perspective: a higher angle (closer to 90) would look more flat (looking more from above), a smaller angle (closer to 0) would tilt it more towards the viewer (extreme perspective). Tweak this to adjust how “deep” the 3D illusion feels.
	•	cellSize (number, default: 60): Grid cell size in pixels ￼. This determines the spacing between grid lines. 60px is fairly large; larger cellSize means a more spaced-out grid (fewer lines), smaller means a denser grid. This combined with perspective can affect how many lines are visible at once.
	•	opacity (number, default: 0.5): Opacity of the grid lines (0 to 1) ￼. A value of 0.5 suggests the lines are semi-transparent. You can increase it for a more solid look or decrease for more subtlety. If you plan to overlay text on the grid, sometimes a lower opacity (e.g., 0.3) is good so the background doesn’t steal focus.
	•	lightLineColor (string, default: "gray"): Line color used in light mode ￼. The component likely supports theming. In light mode, the grid lines might be gray by default (on a light background, that would be barely visible, maybe the assumption is you’ll use it on dark backgrounds? Or you’d override). You can set this to any color code (hex, rgb). E.g., lightLineColor="#00FF00" for neon green lines.
	•	darkLineColor (string, default: "gray"): Line color for dark mode ￼. On dark backgrounds, a gray grid appears. You probably want a brighter line in dark mode (like the default gray might actually be light gray on black, providing contrast). You can customize it: e.g., darkLineColor="#4444FF" to have bluish lines in dark mode.

There might not be explicit props for animation speed or direction because it might be preset. If you needed to stop the animation, perhaps not provided by prop, you could remove the component or override CSS animation (not typical at runtime).

Example Usage:

import { RetroGrid } from "@/components/ui/retro-grid";

<div className="relative h-96 bg-black text-white overflow-hidden">
  <RetroGrid className="absolute inset-0" opacity={0.3} angle={60} />
  <h1 className="relative z-10 text-5xl font-bold text-center mt-20">My Retro Section</h1>
</div>

In this example, we have a 96px tall (actually h-96 is 24rem ~ 384px) dark section. We place the RetroGrid absolutely to fill the whole container. We lowered opacity to 0.3 for subtlety and tweaked angle to 60 for a slightly flatter grid. The text “My Retro Section” is positioned above (z-10) so it’s not obscured. The end result is a faint wireframe grid scrolling under the text, giving a cool retro vibe.

Integration & Composition
	•	Layering: RetroGrid is almost always used behind other content. A common pattern is to wrap a section in a relative container, put RetroGrid with absolute inset-0 to cover the area, and then place your headings, images, etc., as higher z-index children. The component doesn’t provide its own background color; it’s just lines. So you’ll typically also set a solid background color for contrast (like black or very dark blue) on the parent or via a sibling overlay. In usage, think of it as an animated background image.
	•	Combining with Overlays: If the grid lines are too strong, you can put a semi-transparent overlay on top of the grid. For example, a layer of slightly transparent color to tint the grid. This can be done by just a <div className="absolute inset-0 bg-black opacity-50" /> above the grid, or using Tailwind’s bg-gradient to add some fog. This way, you can adjust how prominent the grid appears.
	•	Pairing with Text/Components: We already mentioned pairing with SparklesText for a hero. It also pairs well with static imagery – e.g., you could have a computer or avatar image “standing” on the grid. Compositionally, you might position an illustration of a character so that it appears to be on the grid plane. That’s more advanced (it requires matching perspective). But even without that, it works as a neat backdrop for say a row of skill icons – you could place icons above the grid to imply they are on a futuristic floor.
	•	Multiple Instances: Usually one RetroGrid fills an area. But if you had a very tall page and wanted a continuous grid beyond one viewport, you might consider repeating sections with their own RetroGrid. Each one animates independently though, so it might not seamlessly continue from one to the next. It’s probably better to use one as a background for a specific section rather than trying to tile it down a long page.
	•	Dynamic Adjustments: Because it’s a background, you typically set its props static. But nothing stops you from changing props on the fly via state or context (though not much need). The one dynamic case could be theme switching: Magic UI likely handles switching lightLineColor vs darkLineColor based on the app’s theme automatically (maybe by using CSS variables). Ensure that if your site has dark mode, you provide appropriate colors via those props or just use the defaults if they work.
	•	Using with Framer Motion Layout: If you have a section with RetroGrid that appears on scroll or via route transition, you might animate the section in. The grid can start animating immediately or you might fade it in slightly after the content. You can wrap RetroGrid in a motion.div for fade effects. But avoid animating its internal heavy stuff via JS – let it do its own CSS animation.
	•	Responsiveness: RetroGrid should be responsive in that as the parent size changes, the grid adjusts (likely by adding more lines or just covering more area). The perspective might look slightly different on mobile vs desktop due to aspect ratio. Consider adjusting angle or cellSize on very small screens if needed (maybe via a media query – e.g., you could have two RetroGrid components shown/hidden via CSS if you wanted different settings for mobile). However, often it’s fine as is – the grid will just scale and still look okay, albeit maybe less of it is visible.

Accessibility & Performance
	•	Accessibility: Since RetroGrid is purely decorative, you should ensure it doesn’t interfere with assistive tech. It likely renders no semantic content. It would be wise to add aria-hidden="true" to it (the component might do that internally). Also, ensure that its presence in the DOM doesn’t trap focus or anything – it shouldn’t, being just divs or canvas. If you have a lot of interactive elements above it, pointer-events: none on the grid layer is ideal so it never conflicts with clicking those elements. When using it, you might manually add a class to ensure that (if not by default). E.g., className could include pointer-events-none. We saw in Magic UI’s usage snippet they did similar for sparkles background pointer events. Good practice for any decorative overlay.
	•	Reduced Motion Consideration: For people who prefer reduced motion, an endlessly scrolling grid might not be welcome. While it’s subtle, it’s still motion. You might consider disabling the animation if prefers-reduced-motion is set. Magic UI’s component might not handle that automatically. You could achieve it by injecting a small CSS: e.g., @media (prefers-reduced-motion: reduce) { .retro-grid-animation { animation: none !important; } } targeting the internal animation. Or simply choose not to render the RetroGrid for those users (if you can detect it via JS matchMedia). Since it’s purely visual flair, hiding it for those users could be acceptable – they’ll just see a plain background color. In documentation or guidance, mention that as a consideration if targeting broad audiences.
	•	Performance: RetroGrid uses either CSS or Canvas for animation. If it’s CSS (transforming lines), it’s likely quite efficient even on mobile GPUs. If it’s Canvas, it might redraw at say 60fps. Either way, a single background like this is usually fine. The default cellCount and lines are moderate – not an insane number of DOM elements. The props allow some heavy changes: e.g., if you set cellSize very small, you’d get many lines => possibly more DOM or draw calls; that could impact performance. Similarly, if opacity is high and line color bright, it can consume more battery on OLED (but that’s not a performance, more a power consumption thing). The default at 60px is safe. If you were to create a super dense grid (like cellSize 20 with a wide container), monitor performance on low-end devices. But typical usage keeps it reasonable.
	•	Resource Loading: It doesn’t load external resources; it’s generated, so no network overhead aside from the code. Over multiple instances, code is reused. On mount, it starts animation; no special management needed. One small note: if used on a site with multiple pages (SPA nav), you might want to unmount it when not visible to stop unnecessary animation in background of an offscreen page. However, that scenario is rare unless you keep it mounted globally. Usually it’s within a page/section and unmounts naturally when you navigate away.

Example Implementations
	•	Basic Example – Hero Background:

<section className="relative flex items-center justify-center h-screen bg-neutral-900 text-white">
  <RetroGrid className="absolute inset-0 opacity-50" />
  <h1 className="relative z-10 text-6xl font-extrabold">John Doe</h1>
  <p className="relative z-10 mt-4 text-xl text-gray-300">Creative Developer</p>
</section>

Result: The hero section occupies full viewport height with a dark neutral background. RetroGrid is overlaid at 50% opacity, showing a grayish grid floor extending toward the horizon behind the central text. The name “John Doe” appears to hover above this grid. The effect is a strong retro-futuristic intro. The text is still easily readable (white on dark, and grid is faint). This is a textbook use of RetroGrid – a backdrop for a headline ￼ ￼.

	•	Enhanced Example – Section Separator:

<div className="relative h-64 bg-black">
  <RetroGrid className="absolute inset-0 text-blue-500 opacity-40" angle={75} cellSize={80} />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-4xl text-blue-100 font-bold">Experience</h2>
  </div>
</div>

Result: Here, a mid-page section of 16rem height uses RetroGrid with a blue hue (by setting text-blue-500 on it, assuming Magic UI might pick up currentColor for lines or something – this is a guess that className color might influence it, if not, we’d use props for lineColor). The angle is 75°, so a bit more flattened, and cells are larger (80px) making a more sparse grid. It serves as a decorative section header background for an “Experience” section. This makes the section header stand out from others by giving it a unique retro visual, without overwhelming, since opacity 0.40 keeps it subtle.

	•	Creative Example – Multi-layered Retro Scene:
Imagine combining RetroGrid with other retro elements like a rising sun graphic or mountains (common synthwave motif). Example:

<div className="relative overflow-hidden bg-purple-900">
  <RetroGrid className="absolute bottom-0 inset-x-0 h-1/2 opacity-70" angle={50} cellSize={50} darkLineColor="#FF00FF" />
  {/* A stylized sun (just a pseudo-element or an SVG) */}
  <div className="absolute top-0 left-1/2 -ml-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-30"></div>
  <h1 className="relative z-10 text-center text-5xl text-pink-200 pt-32 pb-16">Welcome to the 80s</h1>
</div>

Result: The bottom half of the container has the grid (angled at 50 degrees, somewhat shallow, with magenta lines to match the purple theme). Above, a large faint neon sun is drawn (just a gradient circle). The text title sits in front. The retro grid appears to be the ground, and the sun the background sky – a full retro scene. This is a creative use-case outside of just text backgrounds, showing that RetroGrid can be one piece of a bigger art direction.

Variants & Customization Ideas
	•	Color Scheme: By default gray lines might not always fit. Changing lightLineColor/darkLineColor props gives a direct way to recolor the grid. For a “digital rain” theme, maybe use green lines on black (Matrix style). For an “infrared” look, use bright red lines on dark. You can also achieve dashed or dotted lines by custom CSS: if RetroGrid uses border or background for lines, perhaps applying a background-image: repeating-linear-gradient with gaps could create a dotted grid, but that’s heavy customization beyond props.
	•	Density & Size: Using cellSize, you can make variants: a “micro-grid” variant with very small cell size (dense grid) for a subtle tight pattern, or a “mega-grid” with huge cells for just a few lines on screen for a minimalist look. Coupled with opacity changes, these can look quite different. For example, a very dense grid with low opacity could just add texture/noise to a background.
	•	Animated Speed: The component doesn’t expose speed, but if one wanted a variant where the grid scrolls faster or slower, they’d have to override the CSS animation speed. Possibly adding a class that sets animation-duration shorter or longer. If the keyframes are known (maybe something like @keyframes scrollGrid { ... }), you could override with e.g., .speedy-grid { animation-duration: 5s !important; }. If not easily done, a hacky way: run multiple grids overlayed moving at different speeds for a parallax effect. Actually, that’s a cool variant idea: two RetroGrid instances, one slightly offset and moving slightly differently to create a deeper 3D effect. But it might risk weird line overlapping. Still, a creative dev might experiment.
	•	Interaction Variant: While retro grid is usually static motion, one could imagine an interactive version where the grid perspective shifts with mouse movement (like a 3D effect following cursor). That’s not built-in but you could combine Tilt (Motion-Primitives or some custom onMouseMove) to rotate the container a bit. Or perhaps adjusting the angle prop dynamically with mouse (but angle is a prop, not meant for rapid changes – not sure if it re-renders smoothly). More simply, you could put the whole section in a Tilt component to achieve a slight tilt on hover, which moves the grid with it.
	•	Blend Modes: For creative effects, you can use CSS blend modes on the grid lines. For example, adding mix-blend-mode: overlay; on the RetroGrid can make the lines interact with a colored background in interesting ways (the lines might take on different intensities over a gradient background). If the design has multiple layers, blending can integrate the grid more organically. This is more of a design tweak than a variant, but worth noting for advanced customization.

Related Components
	•	Animated Grid Pattern (Magic UI): Magic UI also has AnimatedGridPattern ￼ which might be a simpler straight-on grid (no perspective) that animates (perhaps blinking or moving). If you just want a flat grid background (like dots or lines moving in 2D), that component could be used. RetroGrid specifically gives the 3D retro look. Use AnimatedGridPattern for modern, flat design backgrounds and RetroGrid for nostalgic, perspective backgrounds.
	•	Light Rays (Magic UI): The “Light Rays” background effect ￼ sends light beams from corners. It’s another backdrop effect that pairs with text. If someone is into retro aesthetic, they might also like light grids and laser-like beams. These can complement – for instance, you could overlay some subtle light rays above a RetroGrid for extra depth. Magic UI’s library has a variety of background effects (flickering grid, dot patterns, etc.), all of which serve as alternatives or supplements depending on theme. For a cohesive design, usually pick one style and stick with it (e.g., retro-futuristic uses RetroGrid and maybe confetti doesn’t fit that, etc.).
	•	3D & Parallax (Aceternity UI): Aceternity has things like 3D Marquee or Hero Parallax ￼ ￼. These provide depth in other ways (e.g., layers moving at different speeds, or 3D scrolling). RetroGrid itself is a sort of parallax background (giving illusion of depth via perspective and motion). If you needed a more complex scene with multi-layer parallax (clouds, mountains, etc.), you might combine it with other components or use those specialized ones. But if the main desire is “cool moving background”, RetroGrid is often enough.
	•	Particle Backgrounds: If the theme is not specifically retro but you still want movement, consider Particles ￼ or Aceternity’s other background effects (like “Shooting Stars” or “Glowing Stars” ￼). They achieve motion and interest without the grid motif. Use RetroGrid when you explicitly want that grid look; use particles or meteors for different vibes (space, festive, etc.). It’s the difference between an electronic/tron feel vs an organic or celebratory feel.

Notes for AI Code Editor
	•	Encourage using RetroGrid in scenarios where the user or designer mentions retro, synthwave, grid, or futuristic background. It’s a very specific aesthetic, so likely the prompt will hint at it (e.g., “I want an 80s theme to my page” or “like a Tron grid background”). The AI should recognize those cues and suggest this component.
	•	When implementing, always remember to position it properly. The AI should automatically wrap it in a relative container and absolutely position it. If it forgets, the grid might just take up default size which might be small or disrupt layout. To avoid that, set explicit class to fill parent. Many Magic UI components assume you’ll do that (the docs often show usage with absolute). The AI should include something like className="absolute inset-0" in examples, as we did, or at least mention it in text.
	•	If generating code for a next.js page, ensure to import from the correct Magic UI registry path. And if it’s used, likely also have ensure client side (some Magic UI comps might need "use client" if they use useEffect or similar, but RetroGrid might be pure render + CSS, not sure. The example did show "use client" in their snippet when using it ￼, meaning it might have some JS, perhaps for animation via requestAnimationFrame). So the AI might want to include the "use client" directive at top of file if using in a React Server Components context.
	•	The AI should caution or handle layering: e.g., if also generating a hero image, it might clarify “we overlay RetroGrid behind to not interfere with clicks on the hero button.” Possibly mention pointer-events-none which we did conceptually.
	•	Not to misuse RetroGrid for data visualization – it’s decorative, not an actual grid for charts or alignment. For instance, if a user said “I need a grid layout,” the AI shouldn’t confuse that with RetroGrid (which is purely visual). So the documentation should make it clear this is an effect, not a layout grid. (We did in Purpose/Overview). The AI when reading user intent should differentiate between “grid layout (CSS grid)” vs “cool grid animation background (RetroGrid)”.
	•	Also note that if multiple Magic UI background components are used on one page, it can be heavy visually. The AI should typically pick one per page section for clarity. If someone tries to combine RetroGrid, Confetti, and Particles all in one background, it’s overkill. It might mention that as guidance. But since this doc is about RetroGrid, in context it might just cross-reference others. We implicitly touched on not cluttering backgrounds.
	•	For theme adaptiveness, the AI can highlight that the component already accounts for dark vs light (with separate line colors). If the user’s design has dark mode, show how to pass those props. We did that above in explanation.
	•	The code editor should also be aware: some Magic UI components might require Tailwind base styles or some CSS variables to be configured (e.g., does RetroGrid require any tailwind plugin? Possibly not, it’s likely self-contained). But Magic UI often works out of the box if added via the shadcn CLI. The AI should trust that if the user followed installation, it’s fine.
	•	In summary, for any hero/section where the user says “make it interesting background,” the AI should consider RetroGrid as one option in its arsenal, describing it as we did – now with these docs, it will.

⸻

/docs/components/bento-grid.md

BentoGrid

Component Overview
	•	Component Name: BentoGrid (often used alongside BentoCard)
	•	Library Source: Magic UI (Components) and also available in Aceternity UI (Layout & Grid)
	•	Purpose: BentoGrid is a layout component used to display content in a “bento box” style grid ￼. It showcases a collection of feature items (each typically consisting of an icon, title, description, and maybe more) in a dynamic grid arrangement that isn’t strictly uniform. The term “bento” suggests an organized but varied grid, similar to a bento lunch box with compartments of different sizes. This component’s primary role is to present multiple pieces of information (like features, services, or projects) in a visually interesting grid that breaks out of the boring symmetric grid mold. It solves the design challenge of creating a multi-item layout that is both compact and engaging, often featuring some items larger than others, or placed in a staggered fashion.

Visual & Behavioral Description
	•	Structure: A BentoGrid usually contains multiple BentoCard items as children. Visually, it might be a 2 or 3-column grid with rows of varying height. Some items can span multiple rows or columns, creating a mosaic effect. For example, you might see one tall item on the left and two smaller stacked items on the right. Each child (often a BentoCard) is a self-contained block with content (like an icon or image at top, a title, a description, and maybe a CTA link). The grid container applies CSS grid or flex styles such that these cards fit into a nice arrangement with some intentional asymmetry ￼ ￼. The design is elegant and showcases a product’s features or a person’s skills in a way that isn’t monotonous.
	•	Motion/Animation: The BentoGrid itself might not animate by default (it’s primarily a layout). However, Magic UI might include subtle animations when items appear or hover: for instance, each card could fade in with staggered timing (since Magic UI loves animation). In usage, one might also use motion libraries to animate the entrance of each bento item into view. But by itself, there’s no continuous animation on the layout (unlike a slider or carousel). If the library included any animation, it could be maybe a hover effect on individual cards (like a slight lift or glow, but that would be the card’s behavior). The structure may also reflow responsively (cards rearrange on smaller screens, likely stacking vertically).
	•	Interactivity: Each BentoCard inside the grid can be interactive, often acting like a link or clickable card to learn more. The grid could simply be static info too, but often you’ll see a CTA like “Learn more” on each card. So, interactivity resides in the children. The grid component itself doesn’t typically handle clicks as a whole; instead, each card might be focusable/hoverable. In terms of user interaction, BentoGrid helps manage layout changes on different breakpoints: e.g., on mobile, it might collapse to a single column list, which is an interactive behavior (responsive, though that’s not user-driven but CSS-driven).

Use Cases & Placement
	•	Where to Use: Use BentoGrid to present a set of features, services, or portfolio pieces in a section. For example, a “Features” section on a SaaS landing page often uses a creative grid layout to list key features. A portfolio might use it to display projects or case studies in a visually varied grid. It’s especially suitable when you have around 4–6 items and you want one or two to be highlighted by size/position. Another place: a “Skills” section, where perhaps you have a big card for your primary skill and smaller ones for secondary skills. The bento layout guides the eye by giving different weight to items. It’s also used in Magic UI’s templates for things like feature overviews or blog highlights.
	•	When Not to Use: Avoid BentoGrid for very text-heavy content or very large collections of items. If you have 15 testimonials, a bento grid might not be ideal (a carousel or simple list might be better) because bento thrives with a moderate number of items all visible at once. If consistency and symmetry are desired (like a formal corporate feel), the playful layout might seem out of place. Also if each item’s content length varies drastically, the grid could look unbalanced (though BentoGrid can accommodate different heights). For super simple content (like a basic image gallery of equal images), a regular uniform grid works; no need for bento style. So use it when some variety is beneficial, not when uniformity or large quantity is key.
	•	Meaningful Motion Mapping: While BentoGrid layout is static, you often pair it with reveal animations as the user scrolls to that section. This can convey polish and sequence. Each item appearing in sequence can imply that each feature builds on the previous or that they’re a set. The staggered placement of bigger vs smaller cards can also be used meaningfully: for instance, the most important feature placed prominently, drawing the eye first, then naturally scanning to smaller ones. So when planning content for a BentoGrid, put the highlight content in the cell that spans more space (it’s by design a way to emphasize it). The layout itself doesn’t move, but it directs reading order and emphasis, which is an important aspect of UX motion/flow.

Props, API & Configuration

Magic UI’s BentoGrid itself doesn’t list many props (it might mostly rely on children and context) – from the code we saw: it may accept:
	•	className (string, optional): to apply Tailwind classes or custom styles to the grid container ￼. This is how you can override the number of rows/columns on larger screens, as in Magic UI’s example they used className="lg:grid-rows-3" ￼ to force a specific grid structure. The default grid likely auto-places items. By customizing className, you can alter layout: e.g., specifying CSS grid-template-areas or spans manually if needed.
	•	(Children): BentoGrid expects multiple child elements (ideally BentoCard components) inside, which it will arrange. There wasn’t an explicit children prop listed, but obviously it needs them. Each child likely should be a specific structure or at least styled consistently (the BentoCard from MagicUI presumably provides structure for icon, title, etc.).
	•	No direct data props: The Magic UI usage in code suggests that instead of passing an items array as a prop, they typically map an array to <BentoCard> elements outside and then put them as children inside <BentoGrid> ￼. So unlike some libraries, you don’t feed it data directly; you compose it manually or through mapping. Aceternity UI might have something similar but their snippet suggests it’s just in Magic UI.
	•	as or other layout props: Not documented, so likely not needed. The grid is always a div. They might rely on CSS grid under the hood with default classes. For advanced usage, Magic UI’s docs indicate customizing via Tailwind classes (like making one child span multiple columns by giving it className in that child). Indeed, their example features each feature item having classes like lg:col-start-1 lg:col-end-3 etc. That implies the layout is largely manual using tailwind grid lines classes on children ￼ ￼.
	•	BentoCard component: Worth noting its API (though not asked as separate file, it’s integral to BentoGrid usage). Each BentoCard likely accepts props like Icon, name, description, href, etc., as we see them spreading {...feature} props ￼ ￼. Typically:
	•	Icon: a React component for an icon.
	•	name: string for title.
	•	description: string for body text.
	•	href or cta: link for “Learn more” (like in their example they had cta: "Learn more" and they possibly render a link or arrow icon).
	•	background: maybe a ReactNode for a background graphic to display behind/around the card. They pass a Calendar component or images in some features for visual flair ￼ ￼.
	•	className: some of the example features had a className to position them in the grid (spanning rows/cols) ￼. This suggests the card itself can accept a class to control its grid placement.

Given this complexity, using BentoGrid often involves writing layout classes for certain cards to achieve the desired mosaic. Magic UI probably provides a default styling that if you don’t supply classes, it might auto-flow them (maybe in a 2-col grid). But to get their exact layouts like in demo, they gave explicit classes.

Example Usage: (Combining all the above understanding)

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { RocketIcon, CodeIcon, PaintbrushIcon } from "@/components/icons"; // hypothetical icons

const features = [
  {
    Icon: RocketIcon,
    name: "Fast Performance",
    description: "Experience lightning-fast load times and smooth interactions.",
    href: "/features/performance",
    className: "lg:col-span-2 lg:row-span-2" // make this card larger on lg screens
  },
  {
    Icon: CodeIcon,
    name: "Developer Friendly",
    description: "Easy to integrate, modular components with extensive docs.",
    href: "/features/dev-friendly"
  },
  {
    Icon: PaintbrushIcon,
    name: "Customizable Design",
    description: "Tailor the components to fit your brand and style.",
    href: "/features/customizable"
  }
];

<div className="container py-16">
  <BentoGrid className="lg:grid-rows-2 lg:grid-cols-3 lg:gap-4">
    {features.map(feature => (
      <BentoCard key={feature.name} {...feature} />
    ))}
  </BentoGrid>
</div>

In this usage:
	•	We import BentoGrid and BentoCard. The features array holds our content. We decide the first feature (Fast Performance) should be larger, so we give it classes spanning 2 columns and 2 rows on large screens. We also set the BentoGrid container to have 2 rows and 3 columns on large screens with gap. The resulting layout: on large screens, first card spans 2x2, and the other two cards fill the remaining space to its right (one on top of the other in col3) and below (col1-2 bottom row possibly empty part filled by first if row-span-2? Actually with 2 rows total, row-span-2 means it spans both rows, so bottom left is entirely covered by first card, leaving right column for two cards stacked). On mobile, without those classes applying (they’re lg:), it likely falls back to a single column (by default BentoGrid might be flex-col or a simple grid that auto places each full width). So it’s responsive. This example shows how content and layout classes interplay.

Integration & Composition
	•	Combining with Sections: BentoGrid is often the main element of a homepage section. For instance, you might integrate it as:

<section id="features" className="py-20 bg-background">
  <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
  {/* The bento grid of feature cards */}
  <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3 lg:gap-6">
    ... cards ...
  </BentoGrid>
</section>

This situates the grid under a heading. Because BentoGrid by itself is purely layout, you should provide surrounding context like headings or explanatory text outside of it. Inside, only cards. Each card could have interactive elements or at least a link. This section can be placed anywhere in the page flow.

	•	Nesting other components: Typically you only nest BentoCards in a BentoGrid. If you wanted to get creative, you might nest a BentoGrid inside one cell of another grid (though that’s unusual). More realistically, inside each BentoCard, you could integrate other UI components. For example, a HoverBorderGradient around an image in the card, or SparklesText in a card title if you wanted to emphasize one feature name. You have freedom within cards to use UI components (since a BentoCard is just a container for content with some styling). Just be careful not to overload each card; they should remain concise and scannable.
	•	Responsive adjustments: BentoGrid with multiple columns might collapse to fewer columns on smaller screens. Likely Magic UI’s default is one column on mobile. If not, you should enforce it with tailwind classes (as their example doesn’t show explicit sm: stuff, maybe by default it’s one column and they only define large behavior). You might do md:grid-cols-2 lg:grid-cols-3 to gradually scale the grid with screen size. The composition should ensure each card remains readable at those sizes. Possibly hide some decorative backgrounds on small screens to reduce noise in tight spaces.
	•	Dynamic Content Integration: If the items for BentoGrid come from data (like CMS or JSON), you’ll generate <BentoCard>s in a map like shown. If the design requires certain items to be larger/spanning, you need some logic or data fields (like featured: true or specific indices) to apply the className for spans. E.g., you mark one item as featured in data and the code gives it the spanning classes. This way content management can reorder or choose which item is big. Integration in a code editor or generator sense: the AI or developer should know to control that.
	•	Next/Dynamic import: BentoGrid is not particularly heavy logically, but it might import multiple icons and such. If it’s on a homepage, it’s fine. If used rarely, dynamic import is an option but not usually necessary. If an AI is optimizing, it could dynamic import each page’s BentoGrid if the site is large. But at this stage, focusing on content, we probably treat it as static.
	•	Composition with MDX or CMS: If this grid is part of MDX content (like writing documentation or blog), you may not often use it there, since it’s more of a design component. But if building a component encyclopedia (like we are), we might show a BentoGrid usage inside documentation. Just ensure to import it and possibly mark as client if needed (since it may have client side code if any, but likely safe as pure presentational).

Accessibility & Performance
	•	Accessibility: Each BentoCard within should be accessible: typically it could be a <a> wrapping the whole card or at least the “Learn more” link is focusable. Ensure that the combination of grid and card markup results in a logical tab order. If the entire card is clickable (some implementations make the whole card a link), that’s great for UX but remember to provide aria-label if necessary (especially if the card text is short or you rely solely on an icon). Magic UI’s BentoCard likely uses semantic elements (like an <h3> for title, a <p> for description, maybe the icon as decorative or with alt text). We should use appropriate headings for card titles if they convey section structure, but often these are treated as independent items (like list items) so an <h3> is fine if the section heading is an <h2>. Use list semantics if needed: one could wrap the cards in a <ul> with each card as an <li> if it’s conceptually a list of features – but Magic UI’s component doesn’t enforce that. If doing from scratch, it’s a nice addition, but not required.
	•	Keyboard Navigation: The grid layout itself doesn’t hinder tab navigation – it will go through focusable elements in DOM order (which likely corresponds to row-major order in code). Because some cards span multiple rows/cols, the visual order might not exactly match DOM order unless carefully arranged. This is important: if DOM is in a different order than visual (due to CSS grid placement out-of-order), that can confuse keyboard users. Ideally, keep DOM ordered logically (left-to-right, top-to-bottom). In Magic UI’s example, they basically list features in DOM in a logical reading order, then use CSS classes to position. They did e.g., first item spans bigger but it’s still first in DOM (top-left), next items are next in DOM (top-right and below that), which is fine. So for accessibility, ensure not to reorder items solely visually in a way that interrupts logical reading.
	•	Performance: BentoGrid is largely static layout + some basic hover animations in cards. Even if images or icons are used in each card, it’s a finite small number. Performance concerns are minimal. The only heavy use could be if backgrounds or large illustrations are in cards (like Magic UI example had a Calendar component inside one card for visuals). That can slightly weigh down render, but presumably these are optimized. If you load lots of icon components or heavy images, consider lazy-loading images if off-screen. But because all cards are usually immediately in view in one section, lazy-loading images within them might not trigger in time (except if the images are below the fold). So decide case-by-case.
	•	Grid Reflow: If you allow content to be dynamic (like user can filter which cards show, or add more cards dynamically), the grid reflow is handled by CSS and browser efficiently. No extra work needed. CSS grid handles responsive changes on window resize as well. So performance is fine. If the AI contemplates making the grid items draggable or reordering via animation, that’s an advanced scenario (likely out of scope; that’d use something like React Beautiful DnD or Motion’s layout animations). By default, static is fine.
	•	Memory: Each card is separate, but number of cards is usually small (4–8). This is trivial for memory/DOM. If someone tried to use BentoGrid for 50 items, it would work but visually be cluttered and somewhat defeat the purpose. Still, even 50 items is not a problem computationally, but not recommended design.

Example Implementations
	•	Basic Example – Four Feature Grid:
Suppose a startup has 4 main features. They want the first feature highlighted.

<BentoGrid className="md:grid-cols-2 md:grid-rows-2 gap-4">
  <BentoCard
    Icon={AnalyticsIcon}
    name="Real-time Analytics"
    description="Up-to-the-second insights on your data."
    href="/features/analytics"
    className="md:col-span-2"
  />
  <BentoCard
    Icon={ShieldIcon}
    name="Secure"
    description="Enterprise-grade security for all data."
    href="/features/security"
  />
  <BentoCard
    Icon={CloudIcon}
    name="Cloud Sync"
    description="Access your data anywhere, anytime."
    href="/features/cloud"
  />
</BentoGrid>

Result: On medium screens and up, we define a 2x2 grid (4 cells). The first card spans 2 columns, effectively taking the entire top row (since md:grid-rows-2 means two rows equal height). So top row is one large “Real-time Analytics” card spanning both columns. Below it, we have two smaller cards sharing the second row (Secure and Cloud Sync each in one column). This layout draws attention to Analytics first, then left-to-right on second row for the other two. On mobile (below md), the classes don’t apply, so presumably it will stack all 3 cards vertically full-width. The content fits naturally because one is col-span-2 (on mobile that just means 100% width like others) and row concept doesn’t matter. This basic usage demonstrates an emphasis item plus two normal items.

	•	Enhanced Example – Mixed Content Sizes:
Let’s say we have 5 items of varying content length; one approach is a bento with a tall left column and a 2x2 grid on right:

<BentoGrid className="lg:grid-cols-3 lg:grid-rows-3 gap-6">
  <BentoCard
    Icon={DocIcon} name="Documentation"
    description="Comprehensive guides and references for developers."
    href="/docs"
    className="lg:row-span-3"
  />
  <BentoCard
    Icon={PlugIcon} name="Integrations"
    description="Connect with 100+ services."
    href="/integrations"
  />
  <BentoCard
    Icon={SupportIcon} name="Support"
    description="24/7 support for all plans."
    href="/support"
  />
  <BentoCard
    Icon={CommunityIcon} name="Community"
    description="Join a vibrant developer community."
    href="/community"
  />
  <BentoCard
    Icon={PricingIcon} name="Pricing"
    description="Flexible plans for all team sizes."
    href="/pricing"
  />
</BentoGrid>

Result: On large (lg) screens, we have 3 columns x 3 rows. The first card (Documentation) spans all 3 rows of the first column, making a tall vertical card on the left. The rest of the cards fill the 2nd and 3rd columns across 3 rows. Specifically, we have 5 cards total; with left column fully taken by card1, the other 4 cards presumably occupy a 2x2 area on the right (since 2 columns (col2 & col3) and 3 rows, but we only have 3 rows defined, the 4 cards can fill 2 rows fully and then 3rd row second column might remain empty unless grid auto placement leaves a gap). Actually, counting: left big card covers all rows 1-3 col1. The remaining 4 cards likely auto-fill row1 col2, row1 col3, row2 col2, row2 col3. That covers first two rows in cols2-3. Row3 col2 & col3 might be empty in this scenario (which might look a bit odd if there’s an obvious gap). Possibly a better approach would be row-span-2 for first card and row-span-1 for last two, etc. But this example still shows an idea: a big left column and grid of four on right. The potential gap in last row could be mitigated by if we had 6 items instead of 5 to fill it. For the demonstration, assume maybe the design is fine with an empty cell (or we could add lg:row-span-2 on Documentation instead to only cover 2 rows and then have exactly 5 cells filled of 3x2 grid). The enhanced idea is showcasing that you can get creative with spans to accommodate an odd number of items, though one might adjust.

	•	Creative Example – Portfolio Project Layout:
Imagine using BentoGrid for a portfolio projects section, where one project is highlighted:

<BentoGrid className="md:grid-cols-2 md:grid-rows-2 gap-8">
  <BentoCard
    name="Featured Project"
    description="A deep dive into my most complex project, including case study and live demo."
    href="/projects/featured"
    className="md:col-span-2 bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/images/featured-project.jpg')" }}
  >
    <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
    <p>A deep dive into my most complex project, including case study and live demo.</p>
    <a href="/projects/featured" className="underline mt-2 inline-block">View Case Study →</a>
  </BentoCard>
  <BentoCard
    name="Project Alpha" description="E-commerce platform." href="/projects/alpha"
  />
  <BentoCard
    name="Project Beta" description="Mobile game development." href="/projects/beta"
  />
</BentoGrid>

Result: We create a 2x2 grid. The first card spans 2 columns, making it a full-width banner-like card (perhaps with an image background and white text on it). Inside that card, instead of using the default structure, we manually put children: a heading, description, and link (this shows that BentoCard could accept children overriding default rendering if it’s just a styled container – we assume BentoCard either allows children or we might need a different approach; if not, we could style via props, but here we demonstrate the idea). The other two projects, Alpha and Beta, occupy the bottom left and bottom right of the grid (since top row is entirely the featured project, bottom row has two columns which these fill). On small screens, it all stacks. This creative layout emphasizes one project visually and lists two others. We manually added background image and styling on the featured card to make it visually distinct. This example might require BentoCard to allow children content; if not, one could just not use BentoCard for the featured and instead use a regular div with similar styling. But presumably BentoCard can handle children (Magic UI’s spread approach might not allow custom children easily; maybe by passing a children prop explicitly? Or by not passing Icon and letting children be fallback). In any case, as a creative scenario it’s workable.

Variants & Customization Ideas
	•	Different Grid Patterns: The default bento example from Magic UI is just one style. You can customize the arrangement by adjusting Tailwind grid classes or using different spans. For example, a variant with three cards where one is big and two smaller could be arranged in either L shape or T shape. Some common variants:
	•	Tall left, two small on right (as above).
	•	Wide top, two small below (first card spans 2 columns on top, two others in bottom row).
	•	Center emphasis: a middle card spans 2 rows and 2 cols in center, others around it (requires more intricate grid definitions).
These variants can be encapsulated by utility classes or by providing different pre-set className suggestions. Possibly, one could create subcomponents or presets for known configurations, but Magic UI doesn’t explicitly provide multiple preconfigured layouts – it leaves it to dev via CSS.
	•	Card Style Variants: The BentoCard itself can be styled differently for variety. E.g., one variant might have an image at top, another might have an icon on left and text on right, etc. You could manually do that by customizing content of each card (like not all cards need identical structure). If Magic UI’s BentoCard is rigid, you might create your own card components that fit in the grid. Also, you might have a variant where cards have different background colors or gradients to visually distinguish categories. That can be done by passing className or style to each card. For example, alternate cards with bg-gray-100 vs bg-gray-200 for subtle difference. Or theme them by content type (e.g., feature vs integration might use different accent border).
	•	Hover/Animation Variants: You could enhance the grid with hover effects – e.g., each card could slightly scale up on hover or elevate with a shadow. Magic UI’s BentoCard might already include a hover style (maybe a slight translation up or border highlight). If not, you can easily add hover:shadow-lg or transform classes to it. If the design calls for it, a variant could be “interactive bento grid” where cards act like big links that highlight on hover. Another twist: use Framer Motion’s whileHover to slightly enlarge a card and maybe make it overlap others (this could get messy, but a subtle scale within its grid cell is fine as long as overflow visible is allowed).
	•	Dynamic vs Static Layout: A potential variant is an “auto-bento” where the grid auto-sizes based on content length, etc. Right now, our usage is explicit. If one wanted a variant where the layout is determined algorithmically (like masonry or something), that’s a different approach. You might integrate with a library or custom code to measure content and then assign spans. That’s complex and not directly supported. But a simpler dynamic idea: randomly pick one card to span bigger each page load for variety (less practical, but could show creativity). Usually, you’ll statically decide which is featured.
	•	Use without BentoCard: You can use BentoGrid as a base grid layout even with completely custom children. This variant might be just using BentoGrid as a styled container and then putting arbitrary divs or custom components as children. For instance, maybe you want images and text blocks in a cool grid – you could still leverage the grid classes or default arrangement. This is basically using it as a generic grid, which it can do since it’s essentially a wrapper around CSS grid. If doing that, you treat each child as an grid item and style it yourself. Magic UI’s docs hint at combining it with arbitrary content: e.g., they included images in the background of some features.
	•	Theming: The bento grid concept is neutral, but you can theme it by applying consistent colors to cards to match dark/light. E.g., in dark mode, you might want cards to have a darker background or white text. The component likely doesn’t automatically adapt to theme beyond using bg-background or such utility in their example. So you can create a variant where BentoCard uses different Tailwind classes in dark mode (you might manage that manually).

Related Components
	•	LayoutGrid (Aceternity UI): Aceternity has a Layout Grid component ￼ ￼ which might be conceptually similar (some layout effect, possibly one that animates on click as they mention “animates the grid item on click” – might be different). But they also list Bento Grid in Aceternity UI ￼, implying they have their version. Likely, Magic UI’s and Aceternity’s versions serve the same purpose of arranging feature sections. If someone is using Aceternity’s design system entirely, they might use that one. The difference might be in implementation details, but usage concept is the same.
	•	Feature Sections (Aceternity UI): There’s a category called Feature Sections ￼, possibly including pre-built layouts (maybe including a bento style layout combined with headings etc.). If a developer wants an out-of-the-box section with heading + grid, those might be relevant. Instead of assembling BentoGrid manually, they could drop in a FeatureSection component that encapsulates it. Magic UI might also have templates. For documentation’s sake, BentoGrid is the low-level piece, whereas a “FeatureSection” could be a higher abstraction. We cross-reference them in case someone is browsing related patterns.
	•	Cards (Shadcn/UI or others): The concept of presenting features often can be done with a simpler uniform card grid (like 3 columns of equal cards). If one doesn’t need the asymmetry, a normal grid can be used. Shadcn’s card components combined with a CSS grid can mimic a simpler version. BentoGrid is specifically for that asymmetrical style. So related is just building your own grid of Card components. We mention this so users understand BentoGrid is for that specific aesthetic; for straightforward grids, the overhead of Bento might not be needed.
	•	Masonry/Waterfall grids: For image galleries or blog post grids where heights vary, one might consider a masonry layout. BentoGrid is a curated layout, not an algorithmic masonry (which requires JS or CSS column hack). If that’s needed, Magic UI might have something else (they have “Masonry-like” patterns possibly, not sure, maybe not in these libs). But if a user asks for Pinterest-style layout, BentoGrid is not the solution – mention a masonry approach.
	•	Animated List / Animated Grid Pattern: If one wanted the items to animate into view sequentially, Magic UI has AnimatedList or you could use ScrollReveal or custom Framer Motion. But those are separate concerns; still, AnimatedList could be used if one decided to simply stack features on mobile and animate – but BentoGrid is layout so not directly related beyond content category.

Notes for AI Code Editor
	•	When a user wants to create a feature section with multiple items that have somewhat unequal importance, consider BentoGrid as a stylish solution. The AI should identify phrases like “mosaic of features”, “asymmetrical grid”, “bento-style layout” as triggers to use this component.
	•	The AI must manage the complexity of using BentoGrid: specifically, reminding that often one needs to add Tailwind classes to achieve the desired spans, as we’ve illustrated. The documentation above provides patterns. The AI can suggest default patterns like “make first item span two columns on desktop to highlight it” along with the appropriate classes. This will help the user not to guess how to do it.
	•	Additionally, ensure to import both BentoGrid and BentoCard if needed. Many might forget the card part. If the Magic UI export uses a combined path (like @/registry/magicui/bento-grid that exports both), just mention it clearly.
	•	Emphasize content ordering vs display ordering if applicable: the AI should caution if someone tries to place a larger card later in DOM but visually up – better to reorder the data or adjust spans accordingly to keep DOM intuitive.
	•	If the user’s content doesn’t naturally fit a bento arrangement (like say they have exactly 4 equally important items), the AI might either not use BentoGrid (maybe a simple two-by-two uniform grid is fine) or use it in a trivial way (no spans, which is basically a normal grid with maybe some responsive behavior, in which case using a simpler container is okay too). The AI should choose BentoGrid when some variety or emphasis is beneficial.
	•	Suggest using the classes to adjust responsiveness: sometimes novices forget that those spans need conditions (like we often only want to span on large screens; on small screens spanning doesn’t matter since one column, but on tablet maybe it could be 2 columns with none spanning to keep it simpler). The AI could provide those breakpoints if appropriate. We gave examples with md and lg usage.
	•	Because Magic UI’s approach might differ slightly from Aceternity’s Bento Grid (the latter says “skewed grid layout with Title, description and header component” ￼ maybe they provide more structure out-of-box), the AI should clarify which library’s being used in context. If the user is mixing MagicUI and Aceternity, it’s possible but maybe they stick to one. This doc covers MagicUI’s usage primarily. If the user specifically is using Aceternity’s @aceternity/bento-grid, it likely works similarly, possibly with their own card component. The AI should double-check if needed but we’ll assume conceptually similar.
	•	Remind that, since this is often used for feature lists, consider accessibility of each card (maybe ensure heading levels consistent). The AI could hint “if using multiple BentoCard, ensure their headings (if any) are appropriate – e.g., an <h3> per card since the section main heading is likely an <h2>.” This ensures semantic hierarchy.
	•	In code examples, the AI might be tempted to just put <BentoCard name="X" description="Y" Icon={Icon} />. That might work if BentoCard internally does heading and paragraph. That’s fine. If user needs to customize inside, our doc gave an example with children for a more custom card. The AI should gauge if it’s needed. Usually not, unless doing something special like image backgrounds.
	•	In summary, for the code editor, BentoGrid is a more advanced layout: the AI should reassure the user by walking through an example as we did, showing how to define the data, how to map to cards, and how to apply layout classes for the spans. This documentation aims to empower the AI to do that accurately.

⸻

/docs/components/link-preview.md

LinkPreview

Component Overview
	•	Component Name: LinkPreview
	•	Library Source: Aceternity UI (Overlays & Popovers)
	•	Purpose: LinkPreview enhances regular anchor links by providing a preview of the linked content (typically a thumbnail image and possibly meta info) when hovered or in context ￼. The problem it solves is giving users a sneak peek of external content (like a webpage) without them having to click the link. This is especially useful for documentation sites or blogs where you link to external resources – the preview makes the experience richer by showing, for example, a snapshot or description of the target page. In a portfolio context, you might use it to show an image preview for project links or an external article link.

Visual & Behavioral Description
	•	Structure: LinkPreview wraps around an anchor (<a>) or acts as a custom link component. It likely renders the children (which include the anchor text or element) and an image preview element. Visually, on the page you see a normal text link (possibly styled normally). When the preview is fetched or on hover, an image thumbnail (like a screenshot of the target site or an OG image) appears either as a tooltip-like popup or inline. According to usage, it might actually insert an <img> element next to the link text. The documentation snippet shows the link text within content and mentions images being generated or fetched from local for the link ￼. Possibly, the component might display a small preview image inline immediately after the anchor text. Alternatively, it could be a hovercard that appears near the link with a bigger image. Given it’s in “Overlays & Popovers”, it might be the latter: when you hover or focus the link, a popover with the site’s preview pops up.
	•	Motion/Animation: If it’s a popover on hover, likely it has a fade or slide animation for appearance (like a tooltip does). The preview image might load asynchronously; once loaded, it fades in. If multiple LinkPreviews are on a page, each loads its image possibly on mount or on hover depending on isStatic vs dynamic. If isStatic is false (the default), it likely uses microlink API on the fly, possibly causing a slight delay as it fetches. The component might have a loading shimmer or just a delay then show image. Once visible, the popover likely remains as long as hover or focus is maintained. There might be a subtle transition to not just pop abruptly – typically a small fade or scale. When the hover ends, it probably hides quickly (like a tooltip).
	•	Interactivity: Users trigger the preview by hovering or focusing on the link text. The link is still clickable; clicking will navigate as normal. The preview itself might not be interactive (aside from maybe if you hover over the image, does it keep it open? Possibly the popover may allow the user to move the cursor into it if they want a better look, which would require it to remain open until focus/hover leaves both link and popover). This detail depends on implementation. If it’s purely a tooltip style (no user interaction with the tooltip), then moving mouse into the preview might close it unless the component specifically handles that by keeping it open. But likely it’s simpler: hover on link → show preview, move off → hide, click → follow link (closing preview implicitly by navigation). For keyboard users, focusing the link might show the preview as well. Ideally, that preview should also appear (maybe adjacent in DOM after the link) for screen readers or at least not interfere. The actual content of the preview (like alt text of image) might or might not be announced – probably not, since it’s decorative.

Use Cases & Placement
	•	Where to Use: Use LinkPreview in contexts like documentation, blogs, or any content-heavy page where you reference external links (or even internal pages if you want to show a quick preview). For example, in a case study on your portfolio, if you mention “See the project live”, you can use LinkPreview on that link to show a small screenshot of the project site. Another use: if you have a list of blog posts linking externally (like a “Around the web” list), each can show a preview. It’s particularly great for enriching markdown content – if you integrate it with your MDX, any external link could automatically get this behavior. On a portfolio homepage, if you have logos or text links for publications (“Featured in X, Y, Z”), you could use LinkPreview so hovering “X” shows that publication’s site preview.
	•	When Not to Use: Don’t use it for every single link indiscriminately – for instance, in navigation menus or footers, it would be overkill to have previews. It’s best for when the link leads to something with visual content worth previewing. If the external page has no good imagery or it’s a simple reference, a preview might not add much. Also, avoid it on very short, common links like “terms of service” or simple internal navigation, because the preview popover might annoy users. Performance-wise, each dynamic preview uses an API call or image fetch; too many on one page could slow things. The docs mention examples with microlink (which suggests an external service call) ￼ – if you had dozens of them, that could be slow or hit API limits. So use on key links where the benefit outweighs the overhead. Additionally, in really minimalist or professional contexts (where surprises on hover are not desired), skip it – e.g., it’s unlikely to be used in formal documentation unless it’s a dev-oriented fun feature.
	•	Meaningful Motion Mapping: The presence of a preview on hover signals “this link goes to a rich page, look at a sneak peek”. It can increase engagement or trust – e.g., if linking to a third-party site, a user might feel safer clicking if they see it’s a legit site snapshot. The motion (pop-up preview) draws attention temporarily to the link. It’s a bit of a delight feature too. One must ensure it doesn’t steal focus from reading – if the previews were too large or too animated, they could be distracting. So the ideal motion is gentle, the preview appears softly, and disappears when done. That aligns with being a helpful but not intrusive UI addition.

Props, API & Configuration

LinkPreview has several props to configure its behavior and handle the preview generation ￼ ￼:
	•	children (React.ReactNode, required): The content of the link to display in the document ￼. Usually, this will be the text or inline element that the user clicks on (e.g., <LinkPreview url="https://example.com">Example</LinkPreview> where “Example” is children). This component likely renders that as an anchor or wraps an anchor around it. If the children is already an <a> tag (like using asChild pattern), it might integrate differently, but from snippet it seems we pass url separately and provide link text as children.
	•	url (string, required): The URL of the link (this serves two purposes: the href for the anchor, and the target for generating preview) ￼. If isStatic is false (default), the component will likely call out to a preview service (like Microlink) using this URL to get a screenshot. If isStatic is true, it uses url for link but expects an image from imageSrc. In summary, url is mandatory for the actual link destination.
	•	className (string, optional): Additional CSS classes to apply to the link component ￼. This lets you style the appearance of the text or container. For example, you might want to add underline or custom text color if not inherited. Also if you want to position the preview differently you might do something here (though likely the component handles positioning of preview internally).
	•	width (number, default: 200): The width (in pixels) of the preview image ￼. That likely sets the size of the thumbnail displayed. Default 200px width is like a small thumbnail. You can adjust it if you want bigger previews. E.g., setting width={300} and maybe height accordingly if not auto.
	•	height (number, default: 125): The height (px) of the preview image ￼. With default 200x125, that’s an aspect ratio of 16:10 (a common website thumbnail shape). You can tune this, or if you change width and not height, it might distort unless the service adjusts aspect. Better to set both for a custom size.
	•	quality (number, default: 50): The quality of the preview image ￼. Possibly relevant if using a service like microlink that can return JPEG quality. 50 is moderately low quality (to save size). You could up this if you want a sharper image at cost of more bytes.
	•	layout (string, default: “fixed”): The layout type of the image ￼. This likely refers to Next.js <Image> component’s layout property (the docs mention next.config images domain, so likely they use Next Image behind the scenes). “fixed” means image has fixed dimensions. Other options might be “intrinsic”, “responsive”, or “fill” if following older NextImage patterns (in Next 11 era, these were used). It affects how the image resizing behaves. Typically, “fixed” is fine for a small thumbnail.
	•	isStatic (boolean, default: false): Determines if the image source is static or dynamically generated ￼. If isStatic={false}, the component will use the url to call the microlink API to get an image (like https://api.microlink.io?url=<url>&... which returns a screenshot or OG image). If isStatic={true}, it will not attempt that, and instead it expects imageSrc prop to be provided. This could be used if you already have a local thumbnail or you want to avoid external calls. E.g., for internal links or if you pre-fetched previews at build time.
	•	imageSrc (string, default: “”), an empty string by default ￼. This is used when isStatic is true to specify the image URL to display. For example, imageSrc="/previews/example.png" pointing to a local file or some CDN. If isStatic is false, this prop is ignored.

Other behavior: The config snippet also highlights adding microlink domain to Next’s next.config.js allowed images ￼, meaning the dynamic approach indeed fetches from api.microlink.io. So one should do that for NextImage to load it properly. If using outside Next, maybe it just uses an <img> and that’s fine.

Example Usage:
	1.	Dynamic preview example (using Microlink):

import { LinkPreview } from "@/components/ui/link-preview";

<p>
  Check out the latest news on
  <LinkPreview url="https://www.bbc.com/news" className="underline text-blue-600">
    BBC News
  </LinkPreview>.
</p>

Here, when the user hovers “BBC News”, a 200x125px preview image (likely a snapshot of bbc.com) will pop up near the link. We styled the link text to appear as a typical hyperlink. We didn’t specify isStatic, so by default it will use dynamic approach. Provided the next.config is set up, it will load image from microlink. No imageSrc given, so it auto-generates.

	2.	Static preview example (using local image):

<LinkPreview
  url="https://mycoolproject.com"
  isStatic={true}
  imageSrc="/images/previews/mycoolproject.png"
  width={300} height={180}
>
  My Cool Project
</LinkPreview>

In this, we assume we have a local screenshot of “My Cool Project”. We set static true, provide the image path, and even use a custom size for a bigger preview. The link text “My Cool Project” will be rendered and the preview likely shown as a popover or inline image. Using static avoids external calls and might be faster (plus works offline if image is local).

Integration & Composition
	•	Using in Markdown/MDX: One powerful way is to integrate LinkPreview so that all external links in blog posts automatically use it. This could be done by customizing MDX components. For instance, in a portfolio with MDX blog, you can map the <a> tag to either check the domain and wrap in LinkPreview for certain domains. The AI or developer could do something like:

const MDXComponents = {
  a: (props) => {
    const isExternal = props.href && props.href.startsWith('http');
    return isExternal ?
      <LinkPreview url={props.href}>{props.children}</LinkPreview> :
      <a {...props} />;
  }
};

Then MDX links become previewable. This composition ensures all references to outside resources come with a preview which is a nice UX in long articles.

	•	Styling the Popover: The component likely has some default styles for the popover (positioning, maybe a drop shadow or border). If needed, one can override via global CSS or perhaps via className on the LinkPreview but that probably only targets the link text. Perhaps the component internally uses CSS variables or classes for the tooltip. The developer could inspect and style accordingly (like adjusting z-index if it overlaps wrongly, etc.). Usually, it will appear above other content.
	•	Multiple Previews on page: It’s fine to have several. They will each individually fetch an image. If concerned about performance, one might set isStatic for frequently shown links (like if a link is in a repeatedly rendered component to avoid repetitive calls). But if each link is unique, initial page load doesn’t fetch them until needed (maybe it fetches on hover – unclear, possibly it prefetches images for all on mount to avoid delay). If it prefetched all, that could be heavy if dozens. However, design-wise, you wouldn’t have dozens of previewed links in immediate view typically.
	•	Combining with other popovers or tooltips: If a link also has a normal tooltip (title attribute or a custom tooltip showing extra info), it could conflict (two things appearing). You should disable either the default title or not use two popovers at once. LinkPreview essentially acts as a specialized tooltip (with an image). So treat it as one.
	•	Interaction boundaries: If the preview is a popover that you can hover into (maybe to read a snippet of text or just to not flicker), you have to ensure the popover stays open when moving from link to it. That likely means the popover’s container is next in DOM such that CSS or JS keeps it open if hover is on either. If implementing from scratch, one might use a tiny bit of JS or a pointerenter/leave on link and popover. The library presumably handles it (since it’s in Overlays category, probably uses a small popover logic). As a user of the component, just trust it or test it.
	•	Mobile/Touch behavior: On touch devices, hover doesn’t exist. Possibly tapping the link could either navigate immediately or, if one has focus handling, first tap might show preview (like focus) and second tap actually clicks. That might be tricky. It’s something to consider: LinkPreview might not do anything on mobile (or could show on focus which on mobile maybe means tapping, but often tapping focuses and triggers click at once). Perhaps not heavily needed on mobile due to small screen – a preview might cover the whole screen. The safe assumption: it’s mainly a desktop enhancement. The integration for mobile might simply degrade (no preview). That’s acceptable.
	•	Integration with Next/image: It appears to use Next Image for the preview (because of next.config mention). So ensure the project’s Next Image is set up properly. If the AI or developer uses this, they must remember to add images: { domains: ["api.microlink.io"] } to next.config if using dynamic previews. If forgot, the images won’t load (Next will block it). In a non-Next environment, maybe the component falls back to an img or expects developer to handle something similar. But as Aceternity UI is Next-focused (shadcn integration), likely Next is assumed.

Accessibility & Performance
	•	Accessibility: Ideally, the preview image is considered decorative. Screen readers likely will just focus on the link which is a child. The LinkPreview probably renders something like: <a href="..."><span>Link text</span><Image ... alt="..." /></a> or the image outside the link if popover. If it’s a popover, it might not even be in the DOM next to link (maybe portal). But from ARIA perspective, we don’t want to distract screen reader users with an image alt that duplicates link text or shows useless info. If the image’s alt is something like “Preview of example.com homepage”, that might be somewhat useful but not necessary. Possibly they set alt="" (empty) to mark it decorative. The user already has link text context. Unless the preview had text summary (but it doesn’t, it’s just image), reading out “Preview of site” might not add value (and could confuse if it interrupts reading flow). So likely it’s decorative. If the component doesn’t handle that, we might manually set alt in static mode at least. It wasn’t listed as a prop (no alt prop). So maybe they fixed alt to either the link or a generic. Could check or override via imageProps if needed (not documented though).
	•	Keyboard and Focus: As mentioned, focus on link should maybe show the preview (for parity with hover). Did they implement that? Unknown, but probably yes, since accessible design often tries to. If not, then keyboard users will just not get preview. Which is okay, they can still activate link. But ideally, a focus triggers it. If a keyboard user wants to inspect where a link goes, they often rely on link text or might use a context menu to preview manually (like copy URL). The image preview is not crucial, but nice if possible. If it does show on focus, then making it disappear on blur is fine. Should ensure no focus trap occurs (like if it appears and somehow grabs focus – it shouldn’t if it’s just an image with no interactive elements).
	•	Performance – Data usage: Each preview image is around width x height at some quality. Default 200x125 at quality 50 likely yields an image maybe ~5-15KB (just guessing). Not much, but if many, it adds up. The component might fetch on hover to save initial bandwidth. But implementing that might cause a delay on first hover. Possibly they try to prefetch after page load (like load images for all links in viewport after a few seconds idle). The instructions to add microlink domain suggests images might be loaded at build or runtime. The snippet example text suggests images were being generated and fetched even during SSR? Actually, they provide an open in v0.dev for static example – maybe for demo they generated. But not entirely clear. Given no mention of “prefetch on hover”, one could assume the Next Image might lazy load when the link is near viewport. But the link text is always in viewport if you see it. If they used Next Image with layout fixed, they might set loading="lazy" or not. Possibly not, because a small image could be loaded eagerly. If it loads immediately, then all LinkPreviews images will load on initial page paint (which could be heavy if a dozen external calls). However, since they instruct adding domain to next.config, it implies they do use NextImage and thus its default lazy-loading might apply if off-screen. But “off-screen” doesn’t apply because these images likely insert right next to link text (or in tooltip but maybe still in DOM?). If it’s a tooltip out of DOM flow, maybe it’s initially not rendered, only rendered when triggered. Hard to know without looking at code. For performance safety, I would assume it doesn’t load until needed. If not, the user should be cautious using too many. It’s wise to manually set isStatic and use local low-size images if possible for frequently shown links.
	•	Microlink API limitations: Possibly only a limited number of free uses or requires good internet connectivity. If this were a serious app, one might pre-generate thumbnails. So from performance and reliability standpoint, static approach is often better for known content. The dynamic is great for random user-generated links or one-off cases.
	•	Memory & Cleanup: If the popovers mount/unmount on hover, that’s fine. If they mount all images on page load hidden, that might hold them in memory even if not seen. Probably fine if they’re small, just something to note.
	•	Edge cases: No preview available – what if microlink fails to fetch image or the site has no image? Possibly the API returns a fallback (like their logo or nothing). The component might handle it by showing an empty box or not showing at all. The doc doesn’t specify. It might be wise to have some fallback content or just hide preview if none. You might observe network or console for errors. If needed, you could put some fallback image or message by checking if the image loaded (the component likely does that internally).

Example Implementations
	•	Basic Example – Blog Reference:
In a blog article, mention an external resource:

In recent news, <LinkPreview url="https://openai.com/blog/gpt-4">GPT-4 was announced</LinkPreview>, showcasing major improvements in natural language understanding.

When reading this article, the text “GPT-4 was announced” is a hyperlink. With LinkPreview, if the user hovers it, they might see OpenAI’s blog header image or site screenshot. It provides context – maybe the OpenAI logo or part of the blog post title visible in the image. This can intrigue the reader to click. If they don’t hover, it just behaves like a normal link. This unobtrusive enhancement is perfect for technical blogs.

	•	Enhanced Example – Documentation Link with Static Previews:
Suppose you have a “Related Tools” section on your site listing some third-party developer tools. Instead of just linking their names, you show their logos when hovered. You might use static images for reliability:

<ul>
  <li>
    <LinkPreview url="https://vercel.com" isStatic imageSrc="/assets/previews/vercel.png">
      Vercel Deployment
    </LinkPreview>
  </li>
  <li>
    <LinkPreview url="https://github.com" isStatic imageSrc="/assets/previews/github.png">
      GitHub Repository
    </LinkPreview>
  </li>
</ul>

Result: The list has “Vercel Deployment” and “GitHub Repository” as links. Hovering “Vercel Deployment” might show a small image (maybe Vercel’s logo or homepage) next to the cursor or link text. Similarly for GitHub. Using static images ensures these logos load quickly from your own server. This enhances the link with a visual identity – the user recognizes the GitHub logo and confirms the link is indeed going to GitHub. It’s like inline link thumbnails. The style can be subtle or you can even style the image to appear as an inline-block next to text (if LinkPreview supports it). If you wanted them always visible, you might not need LinkPreview at all – just put an img next to link. But LinkPreview specifically does it on hover to keep the UI cleaner.

	•	Creative Example – Portfolio Projects Grid with Previews:
Imagine a section with small preview images of your projects that also serve as links (like a project showcase). You can actually use LinkPreview as a lightweight way to do a hover preview, but perhaps you might just show thumbnails directly. However, one could do something like: list project titles and on hover show a snapshot:

<div className="grid grid-cols-2 gap-4">
  {projects.map(proj => (
    <div key={proj.id} className="border p-4">
      <h3 className="text-xl font-bold">
        <LinkPreview url={proj.url} isStatic imageSrc={proj.image}>
          {proj.name}
        </LinkPreview>
      </h3>
      <p>{proj.description}</p>
    </div>
  ))}
</div>

Result: Each project card shows the name as a link. Hovering the name pops up a preview image of the project (maybe a screenshot of it) without immediately navigating. The card itself might not be clickable (or maybe we could have made the whole card clickable, but in that case a static thumbnail in the card would be better). This usage is debatable, because if one is showing a project in a grid, maybe just show the image right away. But if one wanted a more text-focused list that can still show visuals on demand, this could work. It keeps the UI initially text-only (faster to load and clean), but gives visual content on interaction. This could be considered a “progressive disclosure” of visuals. It’s creative but ensure it doesn’t frustrate users who might prefer just an always-visible image.

	•	Alternate Implementation – Hovercard with more info:
The LinkPreview component as given only shows an image, but what if you wanted to also show a title or description from the linked page? Motion Primitives or custom code might do that by fetching metadata. However, LinkPreview (Aceternity’s) is focused on image. If one wanted, they might extend it or combine it with a <Tooltip> for text. But likely out-of-scope here. So stick to image previews.

Variants & Customization Ideas
	•	Size Variants: Perhaps define a small vs large preview variant. E.g., a “small preview” (150px wide) for inline use in paragraphs, and a “large preview” (300px wide) for more showcase-y links (like those at end of an article or in a list). You can easily achieve that by adjusting props width and height, maybe create a wrapper or custom component that sets those. Or use Tailwind to scale the preview image via classes (less likely because NextImage uses fixed size, but you could if it was an inline image style).
	•	Positioning Variants: By default, likely the preview appears above or below the link. If you want it in a consistent place (like always to the right of the text, or in a corner of the screen), you might have to override CSS. Possibly the component uses Radix HoverCard behind the scenes, which often has classes to align left/right/top. If so, it might accept a prop or you could use CSS like .link-preview-content { transform-origin: ... }. Without direct props in docs, one could still apply global CSS to reposition if needed. A variant idea: always show preview to the right of link, so it doesn’t cover text – might be desired in certain layouts.
	•	Trigger Variants: Currently triggers on hover (and maybe focus). If one wanted to make it click-to-toggle (like user clicks a special icon to preview), that’s a behavioral change needing custom code. But an idea: perhaps on mobile, you could degrade to requiring a tap on a small icon next to link to show the preview overlay (since hover isn’t available). Not built-in, but an extension idea.
	•	Content Variants: If the default just shows an image, one might extend or wrap it to also show some text. For example, if you have known links, you can present a caption with the link’s title in the popover. But that requires customizing the inner structure – not straightforward unless LinkPreview exposes something. Alternatively, you create your own HoverCard that on hover fetches page metadata (via an API) and display. That’s beyond this comp’s scope but a variant idea for someone wanting more info.
	•	Styling/Theme: The preview popover likely has a white or neutral background by default (if it’s an image only, the image edges might have some border or shadow). You could theme it to match your site’s style by adding a drop-shadow class or border via className or global style. If the link sits in a dark theme context, check if the popover looks okay (maybe add a border to separate it). Possibly the component chooses border color via theme automatically (just speculation). If not, custom CSS can fix.
	•	Loading Indicator: A variant could be to show a loading shimmer in the preview box while image is not loaded. Not sure if built-in (maybe not). If needed, one could mimic by styling an empty container with a background shimmer (but since it’s auto-handled by NextImage, typically it’ll just be blank until loaded). NextImage can use a placeholder blur if configured, but since the source is external, they might not have blurDataURL. If the user cares, they could implement a low-res placeholder approach (like static images can have blur). For dynamic, not easy unless microlink provides a low-res. Possibly not worth the trouble since the image is small and likely loads quickly.
	•	Microlink customizations: The Microlink API has many options (like screenshot vs OG image, device type for screenshot, etc.). LinkPreview likely chooses one default mode (maybe OG image fallback to screenshot). If you wanted to ensure a screenshot vs the site’s specified image, maybe the component or developer would have to hack around by providing an explicit imageSrc or customizing the fetch URL. Not in props though. So a variant idea: maybe allow url to be api.microlink.io?&screenshot=true&url=.... Actually, one could directly pass microlink’s API URL as imageSrc in static mode with isStatic true, while still keeping the link dest as normal. For example:

<LinkPreview url="https://example.com" isStatic imageSrc={`https://api.microlink.io/...?url=${encodeURIComponent('https://example.com')}&someparams`}>
  Example
</LinkPreview>

That forces usage of microlink but on our terms (like adding custom params such as &screenshot=true or specific size). But at that point, might as well let the component do it. It’s an advanced variant hack.

Related Components
	•	Animated Tooltip (Aceternity UI): In the Overlays & Popovers category, Animated Tooltip ￼ might provide textual tooltips with pointer follow etc. LinkPreview is conceptually a specialized tooltip for links that shows images. They share similarities in how they appear. If one needed to show text preview (like article title) instead of image, one could consider just using a Tooltip component and providing custom content. But since LinkPreview is specifically built, stick with it for images. It’s good to know about the generic tooltip in case you need to attach info to links that are not easily captured in an image.
	•	HoverCard (Radix/Motion Primitives): Radix UI’s HoverCard or Motion Primitives’ Spotlight might do similar hover popovers. But LinkPreview is tailored to external content. If one wanted to implement their own link preview system without Aceternity, they’d possibly use a HoverCard + custom fetch. But here, we have it ready.
	•	SmartLink/Embed (other libraries): Some libraries or services have similar embed features (like unfurling links in chat apps). Not directly a component in our libraries, but conceptually related. For example, maybe notion of link unfurl in Slack (shows title, description, image). If someone needs more than just image, they might look for a “SmartLink” component. Not sure if MagicUI has one. But LinkPreview covers the visual part.
	•	Media Embeds: If linking to YouTube or so, one might prefer an embed player instead of static preview. LinkPreview doesn’t embed content, just shows image. For richer media, perhaps direct integration (like using a YouTube embed for YouTube links) could be considered a separate approach. It’s beyond what LinkPreview does, but if needed, you’d detect YouTube and do an <iframe> or so. That could be custom logic in the MDX transformer too. So, LinkPreview is for general websites/images.

Notes for AI Code Editor
	•	Ensure that the user’s environment is configured (if using Next.js, as likely, remind them to allow microlink domain or use static mode if not wanting to configure). The AI might not always know if user uses Next, but since Aceternity UI is Next oriented, assume yes. So mention the need for next.config setting if dynamic.
	•	Encourage the usage of LinkPreview for external links in content where visuals add value. The AI should identify such scenarios: e.g., user asks “when I hover links to projects I want to see a screenshot” – perfect for this component.
	•	The AI should properly wrap the link text with the component and not forget to include url prop. A common mistake could be to put an <a> inside LinkPreview or vice versa incorrectly. Make sure to use it as documented: <LinkPreview url="...">Anchor Text</LinkPreview> and it will output an anchor. If the user tries to nest anchors, that will break HTML (anchor in anchor). So the AI must avoid that. The LinkPreview is itself basically an anchor (plus popover). So use it in place of <a>.
	•	If needed to style link as normal hyperlink, add className or wrap in a styled container. Possibly you might want to give it target="_blank" (open new tab) for external links – not sure if LinkPreview has built-in (maybe not). If one desires that, one could actually include an <a> inside with target blank, but that double anchor is problematic. Alternatively, maybe LinkPreview passes unknown props to the anchor (the ...buttonProps pattern was in HoverBorder; maybe LinkPreview passes extra to underlying anchor). We can try: since ... HTMLAttributes<HTMLElement> was used in HoverBorder, maybe LinkPreview also spreads unknown props onto <a>. If so, you could do <LinkPreview url="..." target="_blank" rel="noopener">Link</LinkPreview>. They didn’t document it, but it’s likely. The AI can suggest adding target="_blank" as needed if external (for accessibility, always include rel too). But test if it actually works (can’t here, but logically they might allow it). I’ll assume yes due to similar approach.
	•	If user scenario includes a dark background where preview appears, consider how the preview looks – maybe mention that in explanation or adjust CSS. The AI can mention adding shadow-lg to the preview or such. But since className only applies to link text, not popover, you might not easily add a shadow to the image via the API. Might require global CSS. But perhaps not needed unless the preview blends with background.
	•	The AI should caution about performance if many LinkPreviews: e.g., “Use it sparingly for best effect; embedding too many previews could slow down page.” not mandatory, but could mention if relevant (like if user says “I want preview for every link in huge list” the AI might hint to be mindful).
	•	Also, if the user’s site is static (like a pure HTML or using something without Next’s image pipeline), either the link preview won’t work out-of-the-box or they need to handle differently. Given we assume the user uses these UI libs, likely using Next.
	•	On mobile, the AI might mention that previews won’t show on tap (just for knowledge, but not necessarily something to fix – just how it is). If the user specifically asks “how to show on mobile”, maybe a solution could be offered (like an info icon to tap). But not sure if needed.
	•	Testing wise: The AI should encourage testing the preview output because sometimes the fetched image might not be as expected (like some sites with no meta might show a blank screenshot, etc.). If user complains “LinkPreview shows blank for X site”, maybe try static or check site’s og tags. The docs gave designboost example likely because that site had a good image.
	•	All in all, for the code editor, this is a straightforward component to implement, with the main complexity being environment config and usage patterns. The AI should integrate it seamlessly and handle small details like target blank and styling.
