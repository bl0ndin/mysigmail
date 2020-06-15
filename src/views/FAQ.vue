<template>
  <div class="basic">
    <div class="faq">
      <h3>How to install the email signature for</h3>
      <div
        role="tablist"
        aria-multiselectable="true"
        class="el-collapse"
      >
        <div class="el-collapse-item is-active">
          <div
            role="tab"
            aria-controls="el-collapse-content-3257"
            aria-describedby="el-collapse-content-3257"
            aria-expanded="true"
          >
            <div
              id="el-collapse-head-3257"
              role="button"
              tabindex="0"
              class="el-collapse-item__header is-active"
            >
              Gmail
              <i class="el-collapse-item__arrow el-icon-arrow-right is-active" />
            </div>
          </div>
          <div
            id="el-collapse-content-3257"
            role="tabpanel"
            aria-labelledby="el-collapse-head-3257"
            class="el-collapse-item__wrap"
            style
            data-old-padding-top
            data-old-padding-bottom
            data-old-overflow
          >
            <div class="el-collapse-item__content">
              <ol>
                <li>
                  Click to
                  <strong>Copy as Select</strong> button.
                </li>
                <li>Open Gmail.</li>
                <li>In the top right, click Settings.</li>
                <li>
                  Paste your signature
                  <kbd>Cmd + V</kbd> or
                  <kbd>Ctrl + V</kbd> into the Signature section.
                </li>
                <li>
                  At the bottom of the page, click
                  <strong>Save Changes</strong>.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="el-collapse-item">
          <div
            role="tab"
            aria-controls="el-collapse-content-5324"
            aria-describedby="el-collapse-content-5324"
            aria-expanded="true"
          >
            <div
              id="el-collapse-head-5324"
              role="button"
              tabindex="0"
              class="el-collapse-item__header is-active"
            >
              Outlook
              <i class="el-collapse-item__arrow el-icon-arrow-right is-active" />
            </div>
          </div>
          <div
            id="el-collapse-content-5324"
            role="tabpanel"
            aria-hidden="true"
            aria-labelledby="el-collapse-head-5324"
            class="el-collapse-item__wrap"
          >
            <div class="el-collapse-item__content">
              <ol>
                <li>
                  Click to
                  <strong>Copy as Select</strong> button.
                </li>
                <li>
                  Open Outlook, go to
                  <strong>File &gt; Options &gt; Mail</strong> and click on
                  <strong>Signatures</strong>.
                </li>
                <li>
                  Click
                  <strong>New</strong> to create a new placeholder signature.
                </li>
                <li>
                  Paste your signature
                  <kbd>Ctrl + V</kbd> into the
                  <strong>Edit signature</strong> section.
                </li>
                <li>
                  Click
                  <strong>OK</strong> to save.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="el-collapse-item">
          <div
            role="tab"
            aria-controls="el-collapse-content-511"
            aria-describedby="el-collapse-content-511"
            aria-expanded="true"
          >
            <div
              id="el-collapse-head-511"
              role="button"
              tabindex="0"
              class="el-collapse-item__header is-active"
            >
              Apple Mail
              <i class="el-collapse-item__arrow el-icon-arrow-right is-active" />
            </div>
          </div>
          <div
            id="el-collapse-content-511"
            role="tabpanel"
            aria-hidden="true"
            aria-labelledby="el-collapse-head-511"
            class="el-collapse-item__wrap"
          >
            <div class="el-collapse-item__content">
              <ol>
                <li>
                  Click to
                  <strong>Copy as Select</strong> button.
                </li>
                <li>
                  Open Apple Mail, go to
                  <strong>Preferences</strong> by click
                  <kbd>Cmd + ,</kbd> or
                  <strong>Mail &gt; Preferences &gt; Signatures</strong>
                </li>
                <li>Chose Google to add the signature to all accounts or choose a specific account.</li>
                <li>
                  Click the
                  <strong>"+"</strong> button.
                </li>
                <li>
                  Uncheck the box
                  <strong>Always match my default message font</strong>.
                </li>
                <li>
                  Paste your signature
                  <kbd>Cmd + V</kbd> into the signature section.
                </li>
              </ol>
              <div
                role="alert"
                class="el-alert el-alert--warning is-light"
              >
                <div class="el-alert__content">
                  <p
                    class="el-alert__description"
                  >When you paste your signature, it may look like a blank image with wrong text. It's OK. Compose a new email to see your new signature.</p>
                  <i
                    class="el-alert__closebtn el-icon-close"
                    style="display: none;"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="el-collapse-item">
          <div
            role="tab"
            aria-controls="el-collapse-content-989"
            aria-describedby="el-collapse-content-989"
          >
            <div
              id="el-collapse-head-989"
              role="button"
              tabindex="0"
              class="el-collapse-item__header"
            >
              Spark
              <i class="el-collapse-item__arrow el-icon-arrow-right is-active" />
            </div>
          </div>
          <div
            id="el-collapse-content-989"
            role="tabpanel"
            aria-hidden="true"
            aria-labelledby="el-collapse-head-989"
            class="el-collapse-item__wrap"
          >
            <div class="el-collapse-item__content">
              <ol>
                <li>
                  Click to
                  <strong>Copy as HTML</strong> button.
                </li>
                <li>
                  Open Spark, go to
                  <strong>Preferences</strong> by click
                  <kbd>Cmd + ,</kbd> or
                  <strong>Spark &gt; Preferences &gt; Signatures</strong>
                </li>
                <li>
                  Click the
                  <strong>"+"</strong> button.
                </li>
                <li>
                  Uncheck the box
                  <strong>Always use default font (SF)</strong>.
                </li>
                <li>
                  Click the
                  <strong>"HTML"</strong> button.
                </li>
                <li>
                  Paste your signature
                  <kbd>Cmd + V</kbd> into the signature section.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',

  components: {},

  data () {
    return {}
  },

  created () {
    this.$ga.page(this.$router)
  },

  methods: {}
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
</style>
