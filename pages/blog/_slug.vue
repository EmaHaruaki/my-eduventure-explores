<template>
    <div class="contained-content one-container">
        <div class="gb-container gb-container-e634d9fb">
            <div class="gb-inside-container">
                <div class="gb-container gb-container-22d84eca">
                    <div class="gb-inside-container">

                        <h1 class="gb-headline gb-headline-aecfb06b gb-headline-text">{{ response.details.subject }}</h1>



                        <div class="gb-headline gb-headline-6cffd192 gb-headline-text"><time class="entry-date published"
                                :datetime=response.details.ymd>{{ response.details.ymd }}</time></div>



                    </div>
                </div>
            </div>
        </div>

        <div class="site grid-container container hfeed" id="page">
            <div class="site-content" id="content">

                <div class="content-area" id="primary">
                    <main class="site-main" id="main">
                        <article id="post-538"
                            class="dynamic-content-template post-538 post type-post status-publish format-standard has-post-thumbnail hentry category-beaches category-food-drink category-travel-tips tag-featured">
                            <div class="gb-container gb-container-d1af53a1">
                                <div class="gb-inside-container">
                                    <div class="dynamic-entry-content">
                                        <h2 class="gb-headline gb-headline-ee7628ab gb-headline-text">{{
                                            response.details.subject }}</h2>

                                        <p class="gb-headline gb-headline-f8367287 gb-headline-text">{{
                                            response.details.ext_3 }}</p>

                                        <div class="gb-container gb-container-dae57c76">
                                            <div class="gb-inside-container">
                                                <div class="gb-grid-wrapper gb-grid-wrapper-ee2a6d3a">

                                                    <div class="gb-grid-column gb-grid-column-8007431b">
                                                        <div class="gb-container gb-container-8007431b">
                                                            <div class="gb-inside-container">

                                                                <figure class="gb-block-image gb-block-image-6e2a8b6c"><img
                                                                        loading="lazy" width="600" height="400"
                                                                        class="gb-image gb-image-6e2a8b6c"
                                                                        :src="`${response.details.ext_4}?width=600&height=400`"
                                                                        alt="" title="lucia-foster-WFljHO1EbQk-unsplash"
                                                                        sizes="(max-width: 600px) 100vw, 600px">
                                                                </figure>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div v-for="(n, idx) in response.details.ext_1" :key="idx">
                                            <h3 class="gb-headline gb-headline-6a66c159 gb-headline-text">{{ n.ext_1 }}</h3>

                                            <p class="gb-headline gb-headline-89552acc gb-headline-text" v-html="n.ext_2">
                                            </p>

                                        </div>
                                    </div>

                                    <!--
                                    <div class="gb-container gb-container-02d854d8">
                                        <div class="gb-inside-container">
                                            <div class="gb-grid-wrapper gb-grid-wrapper-47bce4c6">
                                                <div class="gb-grid-column gb-grid-column-f4a9fdfa">
                                                    <div class="gb-container gb-container-f4a9fdfa">
                                                        <div class="gb-inside-container">

                                                            <figure class="gb-block-image gb-block-image-7f7f29ab"><img
                                                                    loading="lazy" width="400" height="400"
                                                                    class="gb-image gb-image-7f7f29ab"
                                                                    src="https://gpsites.co/explore/wp-content/uploads/sites/123/2022/08/testimonials-2.jpg"
                                                                    alt="" title="testimonials-2"
                                                                    srcset="https://gpsites.co/explore/wp-content/uploads/sites/123/2022/08/testimonials-2.jpg 400w, https://gpsites.co/explore/wp-content/uploads/sites/123/2022/08/testimonials-2-300x300.jpg 300w, https://gpsites.co/explore/wp-content/uploads/sites/123/2022/08/testimonials-2-150x150.jpg 150w"
                                                                    sizes="(max-width: 400px) 100vw, 400px"></figure>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="gb-grid-column gb-grid-column-9d875209">
                                                    <div class="gb-container gb-container-9d875209">
                                                        <div class="gb-inside-container">

                                                            <div class="gb-headline gb-headline-92f52333 gb-headline-text">
                                                                About the author</div>



                                                            <p class="gb-headline gb-headline-ff3f4ce4 gb-headline-text">
                                                                Pretium lorem primis senectus habitasse lectus donec
                                                                ultricies tortor adipiscing fusce morbi volutpat
                                                                pellentesque consectetur risus molestie curae malesuada.
                                                                Dignissim lacus convallis massa mauris mattis magnis
                                                                senectus montes mollis phasellus.</p>


                                                            <div class="gb-button-wrapper gb-button-wrapper-6701c1bd">

                                                                <a class="gb-button gb-button-3ca608be" href="#"
                                                                    target="_blank" rel="noopener noreferrer"><span
                                                                        class="gb-icon"><svg aria-hidden="true" role="img"
                                                                            height="1em" width="1em" viewBox="0 0 512 512"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill="currentColor"
                                                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                                            </path>
                                                                        </svg></span></a>



                                                                <a class="gb-button gb-button-cbf513ed" href="#"
                                                                    target="_blank" rel="noopener noreferrer"><span
                                                                        class="gb-icon"><svg aria-hidden="true" role="img"
                                                                            height="1em" width="1em" viewBox="0 0 576 512"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill="currentColor"
                                                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                                                            </path>
                                                                        </svg></span></a>



                                                                <a class="gb-button gb-button-ba503445" href="#"
                                                                    target="_blank" rel="noopener noreferrer"><span
                                                                        class="gb-icon"><svg aria-hidden="true" role="img"
                                                                            height="1em" width="1em" viewBox="0 0 448 512"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path fill="currentColor"
                                                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                                            </path>
                                                                        </svg></span></a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    -->
                                </div>
                            </div>
                        </article>
                        <div class="gb-container gb-container-8565ee6c">
                            <div class="gb-inside-container">
                                <div class="gb-grid-wrapper gb-grid-wrapper-c2951b1b">


                                    <div class="gb-grid-column gb-grid-column-f959b86e">
                                        <div v-if="res_prev_next.list[1].topics_id == $route.params.slug"
                                            class="gb-container gb-container-f959b86e gb-has-dynamic-bg"
                                            :style="{ backgroundImage: `url(${res_prev_next.list[0].ext_4})` }">
                                        </div>
                                    </div>

                                    <div class="gb-grid-column gb-grid-column-9cd41603">
                                        <div v-if="res_prev_next.list[1].topics_id == $route.params.slug"
                                            class="gb-container gb-container-9cd41603">

                                            <h3 class="gb-headline gb-headline-adebe813"><span class="gb-icon"><svg
                                                        viewBox="0 0 40 25.81" xmlns="http://www.w3.org/2000/svg"
                                                        data-name="Layer 1">
                                                        <path
                                                            d="M38.45 11.35H5.3l8.7-8.7a1.552 1.552 0 1 0-2.19-2.2L.46 11.81a1.53 1.53 0 0 0 0 2.19l11.35 11.36a1.552 1.552 0 0 0 2.19-2.2l-8.7-8.7h33.15a1.56 1.56 0 0 0 0-3.11Z">
                                                        </path>
                                                    </svg></span><span class="gb-headline-text"><nuxt-link
                                                        :to="`/blog/${res_prev_next.list[0].topics_id}`">{{
                                                            res_prev_next.list[0].subject }}</nuxt-link></span></h3>

                                        </div>
                                    </div>

                                    <template v-if="res_prev_next.list[0].topics_id == $route.params.slug">
                                        <div class="gb-grid-column gb-grid-column-dbd45d95">
                                            <div class="gb-container gb-container-dbd45d95">

                                                <h3 class="gb-headline gb-headline-e83ea666"><span class="gb-icon"><svg
                                                            viewBox="0 0 40 25.81" xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 1">
                                                            <path
                                                                d="M1.55 14.46H34.7l-8.7 8.7a1.55 1.55 0 1 0 2.19 2.19L39.54 14a1.53 1.53 0 0 0 0-2.19L28.19.45A1.55 1.55 0 1 0 26 2.65l8.7 8.7H1.55a1.56 1.56 0 0 0 0 3.11Z">
                                                            </path>
                                                        </svg></span><span class="gb-headline-text"><nuxt-link
                                                            :to="`/blog/${res_prev_next.list[1].topics_id}`">{{
                                                                res_prev_next.list[1].subject }}</nuxt-link></span></h3>

                                            </div>
                                        </div>


                                        <div class="gb-grid-column gb-grid-column-4bb500ef">
                                            <div class="gb-container gb-container-4bb500ef gb-has-dynamic-bg"
                                                :style="{ backgroundImage: `url(${res_prev_next.list[1].ext_4})` }">
                                            </div>
                                        </div>
                                    </template>
                                    <template
                                        v-else-if="res_prev_next.list[1].topics_id == $route.params.slug && res_prev_next.list.length > 2">
                                        <div class="gb-grid-column gb-grid-column-dbd45d95">
                                            <div class="gb-container gb-container-dbd45d95">

                                                <h3 class="gb-headline gb-headline-e83ea666"><span class="gb-icon"><svg
                                                            viewBox="0 0 40 25.81" xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 1">
                                                            <path
                                                                d="M1.55 14.46H34.7l-8.7 8.7a1.55 1.55 0 1 0 2.19 2.19L39.54 14a1.53 1.53 0 0 0 0-2.19L28.19.45A1.55 1.55 0 1 0 26 2.65l8.7 8.7H1.55a1.56 1.56 0 0 0 0 3.11Z">
                                                            </path>
                                                        </svg></span><span class="gb-headline-text"><nuxt-link
                                                            :to="`/blog/${res_prev_next.list[2].topics_id}`">{{
                                                                res_prev_next.list[2].subject }}</nuxt-link></span></h3>

                                            </div>
                                        </div>


                                        <div class="gb-grid-column gb-grid-column-4bb500ef">
                                            <div class="gb-container gb-container-4bb500ef gb-has-dynamic-bg"
                                                :style="{ backgroundImage: `url(${res_prev_next.list[2].ext_4})` }">
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
export default {
    async asyncData({ $axios, params }) {
        const response= await $axios.$get(`/rcms-api/1/blog/details/${params.slug}`)
        const res_prev_next= await $axios.$get('/rcms-api/1/blog/list', { params: { central_id: params.slug } })
        return {
            meta: {
                title: response.details.subject,
                description: response.details.ext_3,
                type: 'article',
                url: `https://eduventure-explores.net/blog/${params.slug}`,
                image: response.details.ext_4,
            },
            response,
            res_prev_next,
        };
    },
    head() {
        return {
            title: this.meta.title,
            meta: [
                { hid: 'description', name: 'description', content: this.meta.description },
                { hid: 'og:type', property: 'og:type', content: this.meta.type },
                { hid: 'og:title', property: 'og:title', content: this.meta.title },
                { hid: 'og:description', property: 'og:description', content: this.meta.description },
                { hid: 'og:url', property: 'og:url', content: this.meta.url },
                { hid: 'og:image', property: 'og:image', content: this.meta.image },
            ],
        };
    },
};
</script>

<style id='generate-style-inline-css'>
.is-right-sidebar {
    width: 30%;
}

.is-left-sidebar {
    width: 30%;
}

.site-content .content-area {
    width: 100%;
}

@media (max-width: 992px) {

    .main-navigation .menu-toggle,
    .sidebar-nav-mobile:not(#sticky-placeholder) {
        display: block;
    }

    .main-navigation ul,
    .gen-sidebar-nav,
    .main-navigation:not(.slideout-navigation):not(.toggled) .main-nav>ul,
    .has-inline-mobile-toggle #site-navigation .inside-navigation>*:not(.navigation-search):not(.main-nav) {
        display: none;
    }

    .nav-align-right .inside-navigation,
    .nav-align-center .inside-navigation {
        justify-content: space-between;
    }

    .has-inline-mobile-toggle .mobile-menu-control-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .has-inline-mobile-toggle .inside-header {
        flex-direction: row;
        text-align: left;
        flex-wrap: wrap;
    }

    .has-inline-mobile-toggle .header-widget,
    .has-inline-mobile-toggle #site-navigation {
        flex-basis: 100%;
    }

    .nav-float-left .has-inline-mobile-toggle #site-navigation {
        order: 10;
    }
}

.dynamic-author-image-rounded {
    border-radius: 100%;
}

.dynamic-featured-image,
.dynamic-author-image {
    vertical-align: middle;
}

.one-container.blog .dynamic-content-template:not(:last-child),
.one-container.archive .dynamic-content-template:not(:last-child) {
    padding-bottom: 0px;
}

.dynamic-entry-excerpt>p:last-child {
    margin-bottom: 0px;
}
</style>

<style id='generateblocks-inline-css'>
.gb-icon svg {
    height: 1em;
    width: 1em;
    fill: currentColor;
}

.gb-highlight {
    background: none;
    color: unset;
}

figcaption.gb-headline-67592c84 {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
}

figcaption.gb-headline-d3e896fb {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
}

h4.gb-headline-ef5c077e {
    color: var(--contrast-2);
    font-size: 24px;
    margin-bottom: 0;
    display: flex;
    align-items: flex-start;
}

h4.gb-headline-ef5c077e .gb-icon {
    line-height: 0;
    color: var(--contrast-2);
    padding-right: .6em;
    display: inline-flex;
}

h4.gb-headline-ef5c077e .gb-icon svg {
    width: 2em;
    height: 2em;
}

h1.gb-headline-aecfb06b {
    margin-bottom: 15px;
}

div.gb-headline-6cffd192 {
    color: var(--contrast-2);
    line-height: 1.1em;
    border-color: var(--accent);
    display: inline-block;
}

div.gb-headline-6cffd192 a {
    color: var(--contrast-2);
}

div.gb-headline-6cffd192 a:hover {
    color: #888888;
}

div.gb-headline-b0161b77 {
    color: var(--contrast-2);
    line-height: 1.1em;
    padding-left: 16px;
    margin-left: 8px;
    border-left-style: solid;
    border-left-width: 2px;
    border-color: var(--accent);
    display: inline-block;
}

div.gb-headline-b0161b77 a {
    color: var(--contrast-2);
}

div.gb-headline-b0161b77 a:hover {
    color: #888888;
}

div.gb-headline-92f52333 {
    color: var(--contrast-2);
    font-size: 13px;
    margin-bottom: 10px;
}

p.gb-headline-ff3f4ce4 {
    font-size: 17px;
    margin-bottom: 15px;
}

h3.gb-headline-adebe813 {
    color: var(--contrast);
    font-size: 22px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
}

h3.gb-headline-adebe813 a {
    color: var(--contrast);
}

h3.gb-headline-adebe813 a:hover {
    color: var(--contrast-2);
}

h3.gb-headline-adebe813 .gb-icon {
    line-height: 0;
    color: var(--accent);
    padding-bottom: 0.2em;
    padding-left: .1em;
    display: inline;
}

h3.gb-headline-adebe813 .gb-icon svg {
    width: 0.7em;
    height: 0.7em;
}

h3.gb-headline-e83ea666 {
    text-align: right;
    color: var(--contrast);
    font-size: 22px;
    margin-bottom: 0;
    display: flex;
    text-align: right;
    flex-direction: column;
}

h3.gb-headline-e83ea666 a {
    color: var(--contrast);
}

h3.gb-headline-e83ea666 a:hover {
    color: var(--contrast-2);
}

h3.gb-headline-e83ea666 .gb-icon {
    line-height: 0;
    color: var(--accent);
    padding-bottom: 0.2em;
    padding-left: .1em;
    display: inline;
}

h3.gb-headline-e83ea666 .gb-icon svg {
    width: 0.7em;
    height: 0.7em;
}

p.gb-headline-264f20e3 {
    font-size: 17px;
    padding-right: 340px;
    margin-bottom: 0;
}

p.gb-headline-378c314d {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-378c314d .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-378c314d .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-11113809 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-11113809 .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-11113809 .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-c6010c7c {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-c6010c7c .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-c6010c7c .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-28646705 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-28646705 .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-28646705 .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-46a1c561 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-46a1c561 .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-46a1c561 .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-241fb23c {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-241fb23c .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-241fb23c .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-2f325675 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-2f325675 .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-2f325675 .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-2a1b33a7 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-2a1b33a7 .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-2a1b33a7 .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-7aaa93c0 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-7aaa93c0 .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-7aaa93c0 .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-219b417c {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0;
    display: flex;
    align-items: flex-start;
}

p.gb-headline-219b417c .gb-icon {
    line-height: 0;
    padding-top: .25em;
    padding-right: 0.4em;
    display: inline-flex;
}

p.gb-headline-219b417c .gb-icon svg {
    width: 0.9em;
    height: 0.9em;
}

p.gb-headline-3d44d849 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 0;
}

.gb-container .wp-block-image img {
    vertical-align: middle;
}

.gb-container .gb-shape {
    position: absolute;
    overflow: hidden;
    pointer-events: none;
    line-height: 0;
}

.gb-container .gb-shape svg {
    fill: currentColor;
}

.gb-container-dae57c76 {
    margin-top: 60px;
    margin-bottom: 50px;
}

.gb-container-dae57c76>.gb-inside-container {
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-dae57c76>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-baac3cc3 {
    width: 50%;
}

.gb-grid-wrapper>.gb-grid-column-baac3cc3>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-8007431b {
    width: 50%;
}

.gb-grid-wrapper>.gb-grid-column-8007431b>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-56b3cf7f {
    margin-top: 40px;
    margin-bottom: 36px;
}

.gb-container-56b3cf7f>.gb-inside-container {
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-56b3cf7f>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-6481db8f {
    background-color: var(--base-3);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: rgba(69, 69, 69, 0.3);
}

.gb-container-6481db8f>.gb-inside-container {
    padding: 15px 30px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-6481db8f>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-75fc9c99>.gb-inside-container {
    padding-top: 1px;
}

.gb-grid-wrapper>.gb-grid-column-75fc9c99 {
    width: 50%;
}

.gb-grid-wrapper>.gb-grid-column-75fc9c99>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-bd0f9084 {
    width: 50%;
}

.gb-grid-wrapper>.gb-grid-column-bd0f9084>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-e634d9fb {
    border-right-style: solid;
    border-right-width: 20px;
    border-bottom-style: solid;
    border-bottom-width: 20px;
    border-left-style: solid;
    border-left-width: 20px;
    border-color: var(--base-3);
    background-image: url(https://my-eduventure-explores.g.kuroco-img.app/files/user/materials/AdobeStock_196895194-min.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 600px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}

.gb-container-e634d9fb>.gb-inside-container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

.gb-grid-wrapper>.gb-grid-column-e634d9fb>.gb-container {
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-e634d9fb.gb-has-dynamic-bg {
    background-image: var(--background-url);
}

.gb-container-e634d9fb.gb-no-dynamic-bg {
    background-image: none;
}

.gb-container-22d84eca {
    background-color: var(--base-3);
    text-align: center;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
}

.gb-container-22d84eca>.gb-inside-container {
    padding: 60px 60px 10px;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-22d84eca>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-d1af53a1 {
    background-color: var(--base-3);
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
}

.gb-container-d1af53a1>.gb-inside-container {
    padding: 20px 60px 40px;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-d1af53a1>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-02d854d8 {
    margin-top: 50px;
    margin-bottom: 20px;
    background-color: var(--base-2);
}

.gb-container-02d854d8>.gb-inside-container {
    padding: 40px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-02d854d8>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-f4a9fdfa {
    width: 22%;
}

.gb-grid-wrapper>.gb-grid-column-f4a9fdfa>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-9d875209 {
    width: 78%;
}

.gb-grid-wrapper>.gb-grid-column-9d875209>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-8565ee6c>.gb-inside-container {
    padding-right: 30px;
    padding-left: 30px;
    max-width: 920px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-8565ee6c>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-f959b86e {
    background-image: url(https://my-eduventure-explores.g.kuroco-img.app/files/user/materials/AdobeStock_196895194-min.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 160px;
}

.gb-grid-wrapper>.gb-grid-column-f959b86e {
    width: 25%;
}

.gb-grid-wrapper>.gb-grid-column-f959b86e>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-f959b86e.gb-has-dynamic-bg {
    background-image: var(--background-url);
}

.gb-container-f959b86e.gb-no-dynamic-bg {
    background-image: none;
}

.gb-container-9cd41603 {
    height: 100%;
    margin-left: -80px;
    padding: 20px 40px 20px 20px;
    background-image: linear-gradient(90deg, var(--base-3) 40%, rgba(255, 255, 255, 0));
}

.gb-container-9cd41603>.gb-inside-container {
    padding: 20px 40px 20px 20px;
}

.gb-grid-wrapper>.gb-grid-column-9cd41603 {
    width: 25%;
}

.gb-grid-wrapper>.gb-grid-column-9cd41603>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}


.gb-container-dbd45d95 {
    height: 100%;
    z-index: 5;
    position: relative;
    margin-right: -80px;
    padding: 20px 20px 20px 40px;
    background-image: linear-gradient(270deg, var(--base-3) 40%, rgba(255, 255, 255, 0));
}

.gb-container-dbd45d95>.gb-inside-container {
    padding: 20px 20px 20px 40px;
}

.gb-grid-wrapper>.gb-grid-column-dbd45d95 {
    width: 25%;
}

.gb-grid-wrapper>.gb-grid-column-dbd45d95>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-4bb500ef {
    background-image: url(https://my-eduventure-explores.g.kuroco-img.app/files/user/materials/AdobeStock_196895194-min.jpeg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 160px;
}

.gb-grid-wrapper>.gb-grid-column-4bb500ef {
    width: 25%;
}

.gb-grid-wrapper>.gb-grid-column-4bb500ef>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-4bb500ef.gb-has-dynamic-bg {
    background-image: var(--background-url);
}

.gb-container-4bb500ef.gb-no-dynamic-bg {
    background-image: none;
}

.gb-container-b44c3559 {
    margin-top: 80px;
    background-color: var(--base-3);
    color: var(--contrast-2);
}

.gb-container-b44c3559>.gb-inside-container {
    padding: 120px 30px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-container-b44c3559 a,
.gb-container-b44c3559 a:visited {
    color: var(--contrast-2);
}

.gb-container-b44c3559 a:hover {
    color: #888888;
}

.gb-grid-wrapper>.gb-grid-column-b44c3559>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-7ad87699 {
    width: 60%;
}

.gb-grid-wrapper>.gb-grid-column-7ad87699>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-1163293f {
    width: 18%;
}

.gb-grid-wrapper>.gb-grid-column-1163293f>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-ab03ade7 {
    width: 16%;
}

.gb-grid-wrapper>.gb-grid-column-ab03ade7>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper>.gb-grid-column-62df832b {
    width: 6%;
}

.gb-grid-wrapper>.gb-grid-column-62df832b>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-b54527b6 {
    border-top-style: solid;
    border-top-width: 1px;
    border-color: rgba(102, 102, 102, 0.5);
}

.gb-container-b54527b6>.gb-inside-container {
    padding-top: 60px;
}

.gb-grid-wrapper>.gb-grid-column-b54527b6 {
    width: 100%;
}

.gb-grid-wrapper>.gb-grid-column-b54527b6>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-grid-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.gb-grid-column {
    box-sizing: border-box;
}

.gb-grid-wrapper .wp-block-image {
    margin-bottom: 0;
}

.gb-grid-wrapper-ee2a6d3a {
    margin-left: -60px;
}

.gb-grid-wrapper-ee2a6d3a>.gb-grid-column {
    padding-left: 60px;
}

.gb-grid-wrapper-c280b8f1 {
    align-items: center;
}

.gb-grid-wrapper-47bce4c6 {
    align-items: center;
    margin-left: -20px;
}

.gb-grid-wrapper-47bce4c6>.gb-grid-column {
    padding-left: 20px;
}

.gb-grid-wrapper-c2951b1b {
    align-items: center;
}

.gb-grid-wrapper-8771399f>.gb-grid-column {
    padding-bottom: 60px;
}

.gb-block-image img {
    vertical-align: middle;
}

.gb-image-7f7f29ab {
    border-radius: 100%;
    width: 120px;
}

.gb-block-image-645653c2 {
    margin-bottom: 15px;
}

.gb-image-645653c2 {
    width: 100px;
    height: 31px;
}

/*
.gb-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    clear: both;
}
*/

.gb-button-wrapper-93fdff2c {
    justify-content: flex-end;
}

.gb-button-wrapper-8c3e5c75 {
    justify-content: flex-end;
}

.gb-button-wrapper-2b4d72bb {
    justify-content: center;
}

.gb-button {
    text-decoration: none;
}

.gb-icon svg {
    height: 1em;
    width: 1em;
    fill: currentColor;
}

.gb-button-wrapper a.gb-button-8319cd9d,
.gb-button-wrapper a.gb-button-8319cd9d:visited {
    color: var(--contrast);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-right: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-8319cd9d:hover,
.gb-button-wrapper a.gb-button-8319cd9d:active,
.gb-button-wrapper a.gb-button-8319cd9d:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-656dfaea,
.gb-button-wrapper a.gb-button-656dfaea:visited {
    color: var(--contrast);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-right: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-656dfaea:hover,
.gb-button-wrapper a.gb-button-656dfaea:active,
.gb-button-wrapper a.gb-button-656dfaea:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-547640a1,
.gb-button-wrapper a.gb-button-547640a1:visited {
    color: var(--contrast);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-547640a1:hover,
.gb-button-wrapper a.gb-button-547640a1:active,
.gb-button-wrapper a.gb-button-547640a1:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-3a501923,
.gb-button-wrapper a.gb-button-3a501923:visited {
    color: var(--contrast);
    margin-right: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-3a501923:hover,
.gb-button-wrapper a.gb-button-3a501923:active,
.gb-button-wrapper a.gb-button-3a501923:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-3a501923 .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-edb459af,
.gb-button-wrapper a.gb-button-edb459af:visited {
    color: var(--contrast);
    margin-right: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-edb459af:hover,
.gb-button-wrapper a.gb-button-edb459af:active,
.gb-button-wrapper a.gb-button-edb459af:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-edb459af .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-21236cc4,
.gb-button-wrapper a.gb-button-21236cc4:visited {
    color: var(--contrast);
    margin-right: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-21236cc4:hover,
.gb-button-wrapper a.gb-button-21236cc4:active,
.gb-button-wrapper a.gb-button-21236cc4:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-21236cc4 .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-54bc6828,
.gb-button-wrapper a.gb-button-54bc6828:visited {
    color: var(--contrast);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-54bc6828:hover,
.gb-button-wrapper a.gb-button-54bc6828:active,
.gb-button-wrapper a.gb-button-54bc6828:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-54bc6828 .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-3ca608be,
.gb-button-wrapper a.gb-button-3ca608be:visited {
    color: var(--contrast-2);
    margin-right: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-3ca608be:hover,
.gb-button-wrapper a.gb-button-3ca608be:active,
.gb-button-wrapper a.gb-button-3ca608be:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-3ca608be .gb-icon {
    font-size: 1em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-cbf513ed,
.gb-button-wrapper a.gb-button-cbf513ed:visited {
    color: var(--contrast-2);
    margin-right: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-cbf513ed:hover,
.gb-button-wrapper a.gb-button-cbf513ed:active,
.gb-button-wrapper a.gb-button-cbf513ed:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-cbf513ed .gb-icon {
    font-size: 1em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-ba503445,
.gb-button-wrapper a.gb-button-ba503445:visited {
    color: var(--contrast-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-ba503445:hover,
.gb-button-wrapper a.gb-button-ba503445:active,
.gb-button-wrapper a.gb-button-ba503445:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-ba503445 .gb-icon {
    font-size: 1em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-90e2431a,
.gb-button-wrapper a.gb-button-90e2431a:visited {
    color: var(--contrast-2);
    margin-bottom: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-90e2431a:hover,
.gb-button-wrapper a.gb-button-90e2431a:active,
.gb-button-wrapper a.gb-button-90e2431a:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-90e2431a .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-7ee44481,
.gb-button-wrapper a.gb-button-7ee44481:visited {
    color: var(--contrast-2);
    margin-bottom: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-7ee44481:hover,
.gb-button-wrapper a.gb-button-7ee44481:active,
.gb-button-wrapper a.gb-button-7ee44481:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-7ee44481 .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-a755dd5b,
.gb-button-wrapper a.gb-button-a755dd5b:visited {
    color: var(--contrast-2);
    margin-bottom: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-a755dd5b:hover,
.gb-button-wrapper a.gb-button-a755dd5b:active,
.gb-button-wrapper a.gb-button-a755dd5b:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-a755dd5b .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-4059aaaf,
.gb-button-wrapper a.gb-button-4059aaaf:visited {
    color: var(--contrast-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-4059aaaf:hover,
.gb-button-wrapper a.gb-button-4059aaaf:active,
.gb-button-wrapper a.gb-button-4059aaaf:focus {
    color: #888888;
}

.gb-button-wrapper a.gb-button-4059aaaf .gb-icon {
    font-size: 0.7em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-300cfee4,
.gb-button-wrapper a.gb-button-300cfee4:visited {
    color: var(--contrast);
    margin-right: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-300cfee4:hover,
.gb-button-wrapper a.gb-button-300cfee4:active,
.gb-button-wrapper a.gb-button-300cfee4:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-300cfee4 .gb-icon {
    font-size: 1.2em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-d8fa9bd7,
.gb-button-wrapper a.gb-button-d8fa9bd7:visited {
    color: var(--contrast);
    margin-right: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-d8fa9bd7:hover,
.gb-button-wrapper a.gb-button-d8fa9bd7:active,
.gb-button-wrapper a.gb-button-d8fa9bd7:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-d8fa9bd7 .gb-icon {
    font-size: 1.2em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-cfbaf50e,
.gb-button-wrapper a.gb-button-cfbaf50e:visited {
    color: var(--contrast);
    margin-right: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-cfbaf50e:hover,
.gb-button-wrapper a.gb-button-cfbaf50e:active,
.gb-button-wrapper a.gb-button-cfbaf50e:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-cfbaf50e .gb-icon {
    font-size: 1.2em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-69373788,
.gb-button-wrapper a.gb-button-69373788:visited {
    color: var(--contrast);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-69373788:hover,
.gb-button-wrapper a.gb-button-69373788:active,
.gb-button-wrapper a.gb-button-69373788:focus {
    color: var(--contrast-2);
}

.gb-button-wrapper a.gb-button-69373788 .gb-icon {
    font-size: 1.2em;
    line-height: 0;
    align-items: center;
    display: inline-flex;
}

@media (min-width: 1025px) {
    .gb-grid-wrapper>div.gb-grid-column-b54527b6 {
        padding-bottom: 0;
    }

    .gb-button-wrapper-8c3e5c75 {
        flex-direction: column;
        align-items: flex-end;
    }
}

@media (max-width: 1024px) {
    p.gb-headline-264f20e3 {
        padding-right: 0;
    }

    .gb-container-e634d9fb>.gb-inside-container {
        box-sizing: border-box;
    }

    .gb-container-22d84eca {
        margin-right: 30px;
        margin-left: 30px;
    }

    .gb-grid-wrapper>.gb-grid-column-f959b86e {
        width: 50%;
        order: 1;
    }

    .gb-container-9cd41603 {
        margin-left: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-9cd41603 {
        width: 50%;
        order: 3;
    }

    .gb-container-dbd45d95 {
        margin-right: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-dbd45d95 {
        width: 50%;
        order: 4;
    }

    .gb-grid-wrapper>.gb-grid-column-4bb500ef {
        width: 50%;
        order: 2;
    }

    .gb-grid-wrapper>.gb-grid-column-7ad87699 {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-1163293f {
        width: 40%;
    }

    .gb-grid-wrapper>.gb-grid-column-ab03ade7 {
        width: 40%;
    }

    .gb-grid-wrapper>.gb-grid-column-62df832b {
        width: 20%;
    }

    .gb-grid-wrapper-c2951b1b {
        margin-left: -40px;
    }

    .gb-grid-wrapper-c2951b1b>.gb-grid-column {
        padding-left: 40px;
    }

    .gb-button-wrapper a.gb-button-90e2431a {
        margin-right: 15px;
        margin-bottom: 0;
    }

    .gb-button-wrapper a.gb-button-7ee44481 {
        margin-right: 15px;
        margin-bottom: 0;
    }

    .gb-button-wrapper a.gb-button-a755dd5b {
        margin-right: 15px;
        margin-bottom: 0;
    }
}

@media (max-width: 1024px) and (min-width: 768px) {
    .gb-grid-wrapper>div.gb-grid-column-b54527b6 {
        padding-bottom: 0;
    }

    .gb-button-wrapper-7b1df0d3>.gb-button {
        flex: 1;
    }
}

@media (max-width: 767px) {
    p.gb-headline-46a1c561 {
        margin-bottom: 10px;
    }

    .gb-grid-wrapper>.gb-grid-column-baac3cc3 {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-8007431b {
        width: 100%;
    }

    .gb-grid-wrapper>div.gb-grid-column-8007431b {
        padding-bottom: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-75fc9c99 {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-bd0f9084 {
        width: 100%;
    }

    .gb-container-22d84eca>.gb-inside-container {
        padding-right: 30px;
        padding-left: 30px;
    }

    .gb-container-d1af53a1>.gb-inside-container {
        padding-right: 30px;
        padding-left: 30px;
    }

    .gb-container-02d854d8 {
        text-align: center;
    }

    .gb-grid-wrapper>.gb-grid-column-f4a9fdfa {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-9d875209 {
        width: 100%;
    }

    .gb-grid-wrapper>div.gb-grid-column-9d875209 {
        padding-bottom: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-f959b86e {
        width: 100%;
        order: 1;
    }

    .gb-grid-wrapper>div.gb-grid-column-f959b86e {
        padding-bottom: 0;
    }

    .gb-container-9cd41603 {
        margin-left: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-9cd41603 {
        width: 100%;
        order: 2;
    }

    .gb-container-dbd45d95 {
        margin-right: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-dbd45d95 {
        width: 100%;
        order: 4;
    }

    .gb-grid-wrapper>div.gb-grid-column-dbd45d95 {
        padding-bottom: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-4bb500ef {
        width: 100%;
        order: 3;
    }

    .gb-grid-wrapper>div.gb-grid-column-4bb500ef {
        padding-bottom: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-7ad87699 {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-1163293f {
        width: 100%;
    }

    .gb-grid-wrapper>div.gb-grid-column-1163293f {
        padding-bottom: 0;
    }

    .gb-grid-wrapper>.gb-grid-column-ab03ade7 {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-62df832b {
        width: 100%;
    }

    .gb-grid-wrapper>.gb-grid-column-b54527b6 {
        width: 100%;
    }

    .gb-grid-wrapper>div.gb-grid-column-b54527b6 {
        padding-bottom: 0;
    }

    .gb-grid-wrapper-ee2a6d3a>.gb-grid-column {
        padding-bottom: 40px;
    }

    .gb-grid-wrapper-47bce4c6>.gb-grid-column {
        padding-bottom: 20px;
    }

    .gb-grid-wrapper-c2951b1b>.gb-grid-column {
        padding-bottom: 40px;
    }

    .gb-button-wrapper-7b1df0d3>.gb-button {
        flex: 1;
    }

    .gb-button-wrapper-6701c1bd {
        justify-content: center;
    }

    .gb-button-wrapper-8c3e5c75 {
        justify-content: flex-start;
    }
}
</style>