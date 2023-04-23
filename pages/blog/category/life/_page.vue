<template>
    <div class="one-container">
        <div class="gb-container gb-container-64102255">
            <div class="gb-inside-container">

                <h1 class="gb-headline gb-headline-cd476a60 gb-headline-text">生活</h1>


                <div class="gb-container gb-container-f9c8979a">
                    <div class="gb-inside-container">
                        <div class="dynamic-term-description">
                            <p>マレーシアでの生活に必要な情報、日常生活や文化・習慣、観光情報、移住や留学に関する手続きなどについて情報を提供します。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="site grid-container container hfeed" id="page">
            <div class="site-content" id="content">

                <div class="content-area" id="primary">
                    <main class="site-main" id="main">
                        <div class="generate-columns-container ">

                            <article v-for="(n, idx) in response.list" :key="n.topics_id"
                                class="dynamic-content-template post-278 post type-post status-publish format-standard has-post-thumbnail hentry category-beaches category-destinations category-food-drink tag-featured generate-columns tablet-grid-50 mobile-grid-100 grid-parent grid-33">
                                <div class="gb-container gb-container-f8c89c2a">
                                    <div class="gb-inside-container">
                                        <div class="gb-container gb-container-2a4a34eb">
                                            <div class="gb-inside-container">
                                                <div class="gb-button-wrapper gb-button-wrapper-135f96db">
                                                    <nuxt-link
                                                        class="gb-button gb-button-db7e6d2e gb-button-text post-term-item post-term-beaches"
                                                        :to="`/blog/category/${n.contents_type_slug}`">{{ n.contents_type_nm }}</nuxt-link>
                                                </div>
                                            </div>
                                        </div>

                                        <figure class="gb-block-image gb-block-image-40dc14bb"><nuxt-link
                                                :to="`/blog/${n.topics_id}`"><img width="1400" height="933"
                                                    :src="`${n.ext_4}?width=1400&height=933`" class="gb-image-40dc14bb"
                                                    alt="demo image" loading="lazy"
                                                    sizes="(max-width: 1400px) 100vw, 1400px"></nuxt-link></figure>

                                        <div class="gb-container gb-container-71ff0ae8">
                                            <div class="gb-inside-container">
                                                <h2 class="gb-headline gb-headline-c113596a gb-headline-text"><nuxt-link
                                                        :to="`/blog/${n.topics_id}`">{{ n.subject }}</nuxt-link></h2>

                                                <div class="gb-headline gb-headline-6cffd192 gb-headline-text"><time
                                                        class="entry-date published" :datetime=n.ymd>{{ n.ymd }}</time>
                                                </div>

                                                <p class="gb-headline gb-headline-4259b56a gb-headline-text">
                                                    {{ n.ext_3.slice(0, 60) }}...</p>

                                                <div class="gb-button-wrapper gb-button-wrapper-5cbe57a5">
                                                    <nuxt-link class="gb-button gb-button-77995f77"
                                                        :to="`/blog/${n.topics_id}`"><span class="gb-button-text">Read
                                                            More</span><span class="gb-icon"><svg viewBox="0 0 40 25.81"
                                                                xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                                                                <path
                                                                    d="M1.55 14.46H34.7l-8.7 8.7a1.55 1.55 0 1 0 2.19 2.19L39.54 14a1.53 1.53 0 0 0 0-2.19L28.19.45A1.55 1.55 0 1 0 26 2.65l8.7 8.7H1.55a1.56 1.56 0 0 0 0 3.11Z">
                                                                </path>
                                                            </svg></span></nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                        </div><!-- .generate-columns-contaier -->
                        <div class="gb-container gb-container-ef19b6ac">
                            <div class="gb-inside-container">
                                <div class="gb-button-wrapper gb-button-wrapper-4178d196">

                                    <nuxt-link class="gb-button gb-button-ef3a1d58" v-if="response.pageInfo.pageNo != response.pageInfo.startPageNo"
                                    :to="`/blog/category/life/${response.pageInfo.pageNo - 1}`"><span class="gb-icon"><svg
                                                viewBox="0 0 40 25.81" xmlns="http://www.w3.org/2000/svg"
                                                data-name="Layer 1">
                                                <path
                                                    d="M38.45 11.35H5.3l8.7-8.7a1.552 1.552 0 1 0-2.19-2.2L.46 11.81a1.53 1.53 0 0 0 0 2.19l11.35 11.36a1.552 1.552 0 0 0 2.19-2.2l-8.7-8.7h33.15a1.56 1.56 0 0 0 0-3.11Z">
                                                </path>
                                            </svg></span><span class="gb-button-text">Back</span></nuxt-link>

                                    <nuxt-link class="gb-button gb-button-ef3a1d58" v-if="response.pageInfo.pageNo != response.pageInfo.endPageNo"
                                    :to="`/blog/category/life/${response.pageInfo.pageNo + 1}`"><span
                                            class="gb-button-text">Next</span><span class="gb-icon"><svg
                                                viewBox="0 0 40 25.81" xmlns="http://www.w3.org/2000/svg"
                                                data-name="Layer 1">
                                                <path
                                                    d="M1.55 14.46H34.7l-8.7 8.7a1.55 1.55 0 1 0 2.19 2.19L39.54 14a1.53 1.53 0 0 0 0-2.19L28.19.45A1.55 1.55 0 1 0 26 2.65l8.7 8.7H1.55a1.56 1.56 0 0 0 0 3.11Z">
                                                </path>
                                            </svg></span></nuxt-link>

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
        const response= await $axios.$get('/rcms-api/1/blog/life',{params:{pageID:params.page}})
        return {
            meta: {
                title: 'カテゴリ - 生活',
                description: 'マレーシアでの生活に必要な情報、日常生活や文化・習慣、観光情報、移住や留学に関する手続きなどについて情報を提供します。',
                type: 'article',
                url: 'https://eduventure-explores.net/blog/category/life/',
            },
            response,
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
.generate-columns {
    margin-bottom: 40px;
    padding-left: 40px;
}

.generate-columns-container {
    margin-left: -40px;
}

.page-header {
    margin-bottom: 40px;
    margin-left: 40px
}

.generate-columns-container>.paging-navigation {
    margin-left: 40px;
}

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

h1.gb-headline-cd476a60 {
    margin-bottom: 10px;
}

h2.gb-headline-c113596a {
    color: var(--contrast);
    margin-bottom: 8px;
}

h2.gb-headline-c113596a a {
    color: var(--contrast);
}

h2.gb-headline-c113596a a:hover {
    color: var(--contrast-2);
}

div.gb-headline-6cffd192 {
    color: var(--contrast-2);
    line-height: 1.1em;
    margin-bottom: 12px;
    border-color: var(--accent);
}

div.gb-headline-6cffd192 a {
    color: var(--contrast-2);
}

div.gb-headline-6cffd192 a:hover {
    color: #888888;
}

p.gb-headline-4259b56a {
    margin-bottom: 20px;
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

.gb-container-64102255 {
    background-color: var(--base-3);
}

.gb-container-64102255>.gb-inside-container {
    padding: 25px 30px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-64102255>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-f9c8979a {
    font-size: 17px;
    margin-left: 4px;
    border-left-style: solid;
    border-left-width: 3px;
    border-color: var(--accent);
}

.gb-container-f9c8979a>.gb-inside-container {
    padding-left: 15px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-f9c8979a>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-f8c89c2a {
    margin-top: 20px;
}

.gb-container-f8c89c2a>.gb-inside-container {
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-f8c89c2a>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-2a4a34eb {
    margin-bottom: -35px;
    position: relative;
    z-index: 10;
}

.gb-container-2a4a34eb>.gb-inside-container {
    padding-left: 15px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-2a4a34eb>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-71ff0ae8 {
    background-color: var(--base-3);
}

.gb-container-71ff0ae8>.gb-inside-container {
    padding: 30px 30px 25px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-71ff0ae8>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.gb-container-ef19b6ac>.gb-inside-container {
    padding: 0 30px;
    max-width: 1260px;
    margin-left: auto;
    margin-right: auto;
}

.gb-grid-wrapper>.gb-grid-column-ef19b6ac>.gb-container {
    display: flex;
    flex-direction: column;
    height: 100%;
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

.gb-grid-wrapper-8771399f>.gb-grid-column {
    padding-bottom: 60px;
}

.gb-block-image img {
    vertical-align: middle;
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

.gb-button-wrapper-4178d196 {
    justify-content: center;
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

.gb-button-wrapper a.gb-button-db7e6d2e,
.gb-button-wrapper a.gb-button-db7e6d2e:visited {
    background-color: var(--contrast-3);
    color: var(--base-3);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 3px 7px 2px 8px;
    margin-right: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-db7e6d2e:hover,
.gb-button-wrapper a.gb-button-db7e6d2e:active,
.gb-button-wrapper a.gb-button-db7e6d2e:focus {
    background-color: var(--accent);
    color: var(--base-3);
}

.gb-button-wrapper .gb-button-77995f77,
.gb-button-wrapper .gb-button-77995f77:visited {
    color: var(--contrast-3);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper .gb-button-77995f77:hover,
.gb-button-wrapper .gb-button-77995f77:active,
.gb-button-wrapper .gb-button-77995f77:focus {
    color: var(--accent);
}

.gb-button-wrapper .gb-button-77995f77 .gb-icon {
    font-size: 1em;
    line-height: 0;
    padding-left: 0.5em;
    align-items: center;
    display: inline-flex;
}

/*
.gb-button-wrapper a.gb-button-beea65a6,
.gb-button-wrapper a.gb-button-beea65a6:visited {
    color: var(--contrast-3);
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 10px 14px 8px 16px;
    margin-right: 20px;
    margin-left: 20px;
    border-style: solid;
    border-width: 3px;
    border-color: var(--contrast-3);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
*/
/*
.gb-button-wrapper a.gb-button-beea65a6:hover,
.gb-button-wrapper a.gb-button-beea65a6:active,
.gb-button-wrapper a.gb-button-beea65a6:focus {
    color: var(--contrast-3);
    border-color: var(--accent);
}
*/
.gb-button-wrapper a.gb-button-beea65a6 .gb-icon {
    font-size: 1em;
    line-height: 0;
    padding-right: 0.5em;
    align-items: center;
    display: inline-flex;
}

.gb-button-wrapper a.gb-button-ef3a1d58,
.gb-button-wrapper a.gb-button-ef3a1d58:visited {
    color: var(--contrast-3);
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 10px 14px 8px 16px;
    margin-right: 20px;
    margin-left: 20px;
    border-style: solid;
    border-width: 3px;
    border-color: var(--contrast-3);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.gb-button-wrapper a.gb-button-ef3a1d58:hover,
.gb-button-wrapper a.gb-button-ef3a1d58:active,
.gb-button-wrapper a.gb-button-ef3a1d58:focus {
    color: var(--contrast-3);
    border-color: var(--accent);
}

.gb-button-wrapper a.gb-button-ef3a1d58 .gb-icon {
    font-size: 1em;
    line-height: 0;
    padding-left: 0.5em;
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

    .gb-button-wrapper-7b1df0d3>.gb-button {
        flex: 1;
    }

    .gb-button-wrapper-8c3e5c75 {
        justify-content: flex-start;
    }

    .gb-button-wrapper a.gb-button-beea65a6 {
        margin-bottom: 40px;
    }
}
</style>


