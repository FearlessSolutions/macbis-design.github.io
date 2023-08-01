export default {
  title: "Components/Header",
  component: "header-component",
  tags: ["autodocs"],
  render(args) {
    return `
    <header-component 
    theme="${args.theme}"
    size="${args.size}"
    header-logo-theme="${args.headerLogoTheme}"
    header-logo="${args.headerLogo}"
    nav-theme="${args.navTheme}"
    nav-location="${args.navLocation}"
    nav-inline-position="${args.navInlinePosition}"
    account-label="${args.accountLabel}"
    show-search="${args.showSearch}"
    search-theme="${args.searchTheme}"
    search-text-theme="${args.searchTextTheme}"
    nav-separator="${args.navSeparator}"
    header-logo-dash="${args.headerLogoDash}"
    header-logo-stretched="${args.headerLogoStretched}"
    account-container-theme="${args.accountContainerTheme}"
    header-logo-dash-theme="${args.headerLogoDashTheme}"
    nav-separator-theme="${args.navSeparatorTheme}"
    account-container="${args.accountContainer}"
    >
     ${args.children}
    </header-component>
    `;
  },
  argTypes: {
    theme: {
      control: "text",
      options: ["white", "blue", "dark"],
    },
    size: {
      control: "text",
      options: ["slim", "normal"],
    },
    headerLogoTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    headerLogo: {
      control: { type: "text" },
    },
    navTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    navLocation: {
      control: { type: "text" },
      options: ["below", "inline", "none"],
    },
    navInlinePosition: {
      control: { type: "text" },
      options: ["right", "left"],
    },
    accountLabel: {
      control: { type: "text" },
    },
    showSearch: {
      control: { type: "boolean" },
      options: ["true", "false"],
    },
    searchTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    searchTextTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    navSeparator: {
      control: { type: "boolean" },
    },
    headerLogoDash: {
      control: { type: "boolean" },
    },
    headerLogoStretched: {
      control: { type: "boolean" },
    },
    accountContainerTheme: {
      control: { type: "text" },
      options: ["white", "blue", "dark"],
    },
    headerLogoDashTheme: {
      control: { type: "text" },
      options: ["blue", "white"],
    },
    navSeparatorTheme: {
      control: { type: "text" },
      options: ["blue", "white"],
    },
    accountContainer: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    componentSubtitle: "When to use the basic header",
    docs: {
      description: {
        component: `Limited sections - the basic header is great if you have a modest number of sections in your main navigation. Shallow hierarchy - you may also use it if each main section listed in the horizontal navigation has six or fewer subsections that you’d like to include in a dropdown menu.`,
      },
    },
  },
};

export const BlackWithGrayDropdown = {
  args: {
    theme: "dark",
    size: "normal",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "dark",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <dropdown-component>
    <dropdown-link theme="dark" panel-theme="dark" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
    <dropdown-link theme="dark" panel-theme="dark" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For designers </dropdown-panel-link>
        <dropdown-panel-link> For designers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
`,
  },
};

export const BlueWithWhiteDropdown = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <dropdown-component>
    <dropdown-link theme="white" panel-theme="white" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
    <dropdown-link theme="white" panel-theme="white" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For designers </dropdown-panel-link>
        <dropdown-panel-link> For designers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
  },
};

export const BlueWithBlueDropdown = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <dropdown-component>
    <dropdown-link theme="dark-blue" panel-theme="dark-blue" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
    <dropdown-link theme="dark-blue" panel-theme="dark-blue" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For designers </dropdown-panel-link>
        <dropdown-panel-link> For designers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
  },
};

export const BlueWithContainWhiteDropdown = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <dropdown-component>
    <dropdown-link theme="white" panel-theme="white" panel-size="contain" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
  },
};

export const BlueWithContainBlueDropdown = {
  args: {
    theme: "blue",
    size: "normal",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "blue",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <dropdown-component>
    <dropdown-link theme="dark-blue" panel-theme="dark-blue" panel-size="contain" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
  },
};

export const BlackWithContainBlackDropdown = {
  args: {
    theme: "dark",
    size: "normal",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    navLocation: "below",
    navTheme: "dark",
    navSeparator: "true",
    headerLogoDash: "true",
    navSeparatorTheme: "white",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <dropdown-component>
    <dropdown-link theme="dark" panel-theme="dark" panel-size="contain" text="Section" col="3">
      <dropdown-panel-section>
        <dropdown-panel-link> For developers </dropdown-panel-link>
        <dropdown-panel-link> For developers </dropdown-panel-link>
      </dropdown-panel-section>
    </dropdown-link>
  </dropdown-component>
  `,
  },
};

export const SmallBlueWithSearchbar = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "true",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
  },
};

export const SmallBlueWithInspect = {
  args: {
    theme: "blue",
    navSeparator: "true",
    navSeparatorTheme: "white",
    size: "slim",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    accountContainerTheme: "white",
    headerLogoDash: "true",
    headerLogoStretched: "false",
  },
};

export const SmallBlue = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "false",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountContainer: "false",
    navLocation: "inline",
    headerLogoDash: "false",
    navSeparator: "false",
  },
};

export const SmallBlueWithAccountContainer = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "false",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    navLocation: "inline",
    navInlinePosition: "left",
    headerLogoDash: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
    children: `
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  <button-component size="large" label="Button" type="primary" state="filled"></button-component>
  `,
  },
};

export const SmallBlueWithBigInspect = {
  args: {
    theme: "blue",
    size: "slim",
    showSearch: "true",
    searchTheme: "blue",
    searchTextTheme: "white",
    headerLogo: "4",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    headerLogoStretched: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
  },
};

export const SmallWithLogo = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "dark",
    headerLogo: "2",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    accountContainerTheme: "dark",
    navSeparator: "false",
  },
};

export const SmallBlueWithLogo = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "blue",
    headerLogo: "0",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "blue",
    navSeparator: "false",
  },
};

export const SmallWithBigInspect = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "blue",
    headerLogo: "6",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    headerLogoDashTheme: "blue",
    headerLogoStretched: "true",
    accountContainerTheme: "blue",
    navSeparator: "false",
  },
};

export const SmallWithBlueLogo = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "true",
    searchTheme: "white",
    searchTextTheme: "blue",
    headerLogo: "1",
    headerLogoTheme: "blue",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "blue",
    headerLogoStretched: "true",
    navSeparator: "false",
  },
};

export const SmallBlackWithLogo = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "true",
    searchTheme: "dark",
    searchTextTheme: "white",
    headerLogo: "3",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoStretched: "false",
  },
};

export const SmallBlueBlack = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "true",
    searchTheme: "dark",
    searchTextTheme: "white",
    headerLogo: "5",
    headerLogoTheme: "blue",
    accountTheme: "blue",
    accountLabel: '"My Account"',
    accountStyle: "detailed",
    headerLogoStretched: "true",
    navSeparator: "false",
    accountContainerTheme: "white",
    headerLogoDash: "false",
  },
};

export const SmallBlackWithFilledLogo = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "false",
    headerLogo: "7",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "white",
    navSeparator: "false",
    headerLogoStretched: "false",
  },
};

export const SmallBlackWithFilledLogoWithoutInspect = {
  args: {
    theme: "dark",
    size: "slim",
    showSearch: "false",
    headerLogo: "7",
    headerLogoTheme: "dark",
    accountLabel: '"My Account"',
    accountContainerTheme: "white",
    navSeparator: "false",
    headerLogoDash: "false",
  },
};

export const SmallBlueWithBlueLogo = {
  args: {
    theme: "white",
    size: "slim",
    showSearch: "false",
    navSeparator: "true",
    headerLogo: "0",
    headerLogoTheme: "white",
    accountLabel: '"My Account"',
    headerLogoDash: "true",
    accountContainerTheme: "blue",
    navSeparatorTheme: "blue",
    headerLogoDashTheme: "blue",
    headerLogoStretched: "false",
  },
};
