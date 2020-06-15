<template>
  <div>
    <table
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      style="font-size: 0; line-height: 1.4;"
    >
      <tbody>
        <!-- Avatar column -->
        <tr>
          <td style="vertical-align: bottom;">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              role="presentation"
              style="font-size: 0;"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://steapstailor.s3.fr-par.scw.cloud/logos/steapstailor_logo.png"
                      style="width: 155px;"
                      alt=""
                    >
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px; padding-bottom: 5px; text-align: center;">
                    <img
                      src="https://steapstailor.s3.fr-par.scw.cloud/logos/steapstailor_groupe_baseline.png"
                      style="width: 135px;"
                      alt=""
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <avatar
              :show-avatar="showAvatar"
              :src="image"
              :size="options.avatar.size"
              :roundness="options.avatar.roundness"
            /> -->
          </td>
          <td>
            <span style="margin:1px 8px 0px; vertical-align:middle">
              <span>&nbsp;</span>
            </span>
          </td>
          <td style="background-color:rgb(208, 210, 216); width: 1px;" />
          <td>
            <span style="margin:1px 8px 0px; vertical-align:middle">
              <span>&nbsp;</span>
            </span>
          </td>
          <!-- Info column -->
          <td style="vertical-align: top;">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              role="presentation"
              style="font-size: 0; line-height: 1.3;"
            >
              <tbody>
                <!-- Name and job fields -->
                <tr>
                  <td>
                    <span
                      :style="[fontBase, {
                        fontSize: `${options.font.size + 2}px`,
                        color: options.color.mainPreview || options.color.main,
                        fontWeight: 700
                      }]"
                    >{{ mainFields[0].value }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      :style="[fontBase, {
                        color: options.color.secondaryPreview || options.color.secondary
                      }]"
                    >{{ mainFields[1].value }}</span>
                    <!-- <span v-if="mainFields[2].value && options.separator !== 'br'">
                      <span :style="fontBase">&nbsp;{{ options.separator }}&nbsp;</span>
                      <span :style="fontBase">{{ mainFields[2].value }}</span>
                    </span> -->
                  </td>
                </tr>
                <!-- <tr v-if="options.separator === 'br'">
                  <td>
                    <span :style="fontBase">{{ mainFields[2].value }}</span>
                  </td>
                </tr> -->
                <!-- Other fields -->
                <tr>
                  <td>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      role="presentation"
                      style="margin-top: 20px; font-size: 0; line-height: 1.4;"
                    >
                      <template v-for="item in otherFields">
                        <tr
                          v-if="item.value"
                          :key="item.name"
                        >
                          <td>
                            <span
                              v-if="item.type !== 'email'"
                              :style="[fontBase, {
                                color: options.color.mainPreview || options.color.main,
                                fontWeight: 600
                              }]"
                            >{{ item.name }}&nbsp;:&nbsp;</span>
                            <a
                              v-if="item.type === 'link'"
                              :href="formatLink(item.value)"
                              style="text-decoration: none; color: inherit;"
                              :style="fontBase"
                            >{{ item.value }}</a>
                            <a
                              v-if="item.type === 'mobile'"
                              :href="formatPhone(item.value)"
                              style="text-decoration: none; color: inherit;"
                              :style="fontBase"
                            >{{ item.value }}</a>
                            <a
                              v-if="item.type === 'phone'"
                              :href="formatPhone(item.value)"
                              style="text-decoration: none; color: inherit; padding-left: 8px;"
                              :style="fontBase"
                            >{{ item.value }}</a>
                            <a
                              v-if="item.type === 'email'"
                              :href="`mailto:${item.value}`"
                              style="text-decoration: none; color: inherit;"
                              :style="fontBase"
                            >{{ item.value }}</a>
                            <span
                              v-if="item.type === 'text'"
                              :style="fontBase"
                            >{{ item.value }}</span>
                          </td>
                        </tr>
                      </template>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td>
            <span style="margin:1px 8px 0px; vertical-align:middle">
              <span>&nbsp;</span>
            </span>
          </td>
          <td style="background-color:rgb(208, 210, 216); width: 1px;" />
          <td>
            <span style="margin:1px 8px 0px; vertical-align:middle">
              <span>&nbsp;</span>
            </span>
          </td>

          <!-- Company Info column -->
          <td style="vertical-align: top;">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              role="presentation"
              style="font-size: 0; margin-top: 3px;"
            >
              <tbody>
                <tr>
                  <td>
                    <span
                      :style="[fontBase, {
                        color: options.color.secondaryPreview || options.color.secondary
                      }]"
                    >{{ mainFields[2].value }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      :style="[fontBase, {
                        color: options.color.secondaryPreview || options.color.secondary
                      }]"
                    >{{ mainFields[3].value }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      role="presentation"
                      style="font-size: 0; margin-top: 3px; line-height: 1.4;"
                    >
                      <tr>
                        <td>
                          <span :style="[fontBase]">{{ mainFields[4].value }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span :style="[fontBase]">{{ mainFields[5].value }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span :style="[fontBase]">{{ mainFields[6].value }}&nbsp;{{ mainFields[7].value }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span :style="[fontBase]">{{ mainFields[8].value }}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
    <!-- Addons -->
    <table
      v-if="isAdded('mobileApp')"
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      style="margin-top: 10px; font-size: 0;"
    >
      <tbody>
        <!-- Social icons -->
        <tr v-if="socials.installed.length">
          <td>
            <table
              cellspacing="2"
              cellpadding="0"
              border="0"
              role="presentation"
              style="margin-top: 5px; margin-left: -2px; font-size: 0;"
            >
              <tbody>
                <tr>
                  <td
                    v-for="item in socials.installed"
                    :key="item.name"
                    align="center"
                    style="width: 20px; height: 20px; border-radius: 3px;"
                    :style="{
                      backgroundColor: options.color.mainPreview || options.color.main,
                    }"
                  >
                    <a :href="formatLink(item.link)">
                      <img
                        width="12px"
                        :src="`${s3url}/icons/${item.icon}.png`"
                        :alt="`social-icon-${item.icon}`"
                        style="display: table-cell; vertical-align: middle;"
                      >
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      v-if="isAdded('mobileApp')"
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      style="margin-top: 10px; font-size: 0;"
    >
      <tbody>
        <tr>
          <td v-if="addons.mobileApp.appStore.link">
            <a :href="addons.mobileApp.appStore.link">
              <img
                :src="addons.mobileApp.appStore.img"
                style="height:35px; margin-right: 5px;"
                alt="app store badge"
              >
            </a>
          </td>
          <td v-if="addons.mobileApp.googlePlay.link">
            <a :href="addons.mobileApp.googlePlay.link">
              <img
                :src="addons.mobileApp.googlePlay.img"
                style="height:35px;"
                alt="google play badge"
              >
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      v-if="isAdded('banner')"
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      style="font-size: 0; margin-top: 10px; width: 100%;"
    >
      <tbody>
        <tr v-if="addons.banner.image">
          <td>
            <a
              v-if="addons.banner.link"
              :href="formatLink(addons.banner.link)"
            >
              <img
                :src="addons.banner.image"
                alt="banner"
                style="max-width: 100%"
              >
            </a>
            <img
              v-else
              :src="addons.banner.image"
              alt="banner"
              style="max-width: 100%"
            >
          </td>
        </tr>
        <banner-placeholder v-else />
      </tbody>
    </table>
    <table
      v-if="isAdded('disclaimer')"
      cellspacing="0"
      cellpadding="0"
      border="0"
      role="presentation"
      style="font-size: 0; color: #888; margin-top: 10px;"
    >
      <tbody>
        <tr>
          <td>
            <span :style="fontBase">{{ addons.disclaimer }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <promote-signature v-if="template.promoteSignature" /> -->
  </div>
</template>

<script>
import EmailTemplate from './emailTemplate'
// import Avatar from './components/Avatar'
// import PromoteSignature from './components/PromoteSignature'
import BannerPlaceholder from './components/BannerPlaceholder'

export default {
  components: {
    // Avatar,
    // PromoteSignature,
    BannerPlaceholder
  },
  extends: EmailTemplate
}
</script>
