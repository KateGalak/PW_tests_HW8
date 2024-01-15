import { expect, type Locator, type Page } from "@playwright/test";

export class AdminMenu {
  readonly page: Page;

  readonly getDashboard: Locator;
  readonly getOrdering: Locator;
  readonly getAccounts: Locator;
  readonly getMSRPpricing: Locator;
  readonly getServices: Locator;
  readonly getProvisioning: Locator;
  readonly getMicrosoft365SaaS: Locator;
  readonly getManagedBaaSProweredByVeeam: Locator;
  readonly getManagedDraaSProweredByVeeam: Locator;
  readonly getCloudTier: Locator;
  readonly getReports: Locator;
  readonly getInventory: Locator;
  readonly getDiskUtilization: Locator;
  readonly getCustomerReport: Locator;
  readonly getNetworkStatus: Locator;
  readonly getAdministrative: Locator;
  readonly getUserManagement: Locator;
  readonly getRoles: Locator;
  readonly getAuditHistory: Locator;
  readonly getInfrastructure: Locator;
  readonly getWANaccelerators: Locator;
  readonly getMaintenance: Locator;
  readonly getSentMailLog: Locator;
  readonly getInterfaceColors: Locator;
  readonly getLegal: Locator;
  readonly getHelp: Locator;
  readonly getAssets: Locator;
  readonly getReleaseNotes: Locator;
  readonly getFeedback: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getDashboard = page.locator("xpath=//a[@class='nowrap nav-link']");
    this.getOrdering = page.locator(
      "xpath=//button[contains(text(),'Ordering')]"
    );
    this.getAccounts = page.locator("xpath=//a[contains(text(),'Accounts')]");

    this.getMSRPpricing = page.locator(
      "xpath=//a[contains(text(),'MSRP Pricing')]"
    );
    this.getServices = page.locator(
      "xpath=//button[contains(text(),'Services')]"
    );
    this.getProvisioning = page.locator(
      "xpath=//a[contains(text(),'Provisioning')]"
    );
    this.getMicrosoft365SaaS = page.locator(
      "xpath=////a[contains(text(),'Microsoft 365 SaaS')]"
    );
    this.getManagedBaaSProweredByVeeam = page.locator(
      "xpath=//a[contains(text(),'Managed BaaS Powered by Veeam')]"
    );
    this.getManagedDraaSProweredByVeeam = page.locator(
      "xpath=//a[contains(text(),'Managed DRaaS Powered by Veeam')]"
    );
    this.getCloudTier = page.locator(
      "xpath=//a[contains(text(),'Cloud Tier')]"
    );
    this.getReports = page.locator(
      "xpath=////button[contains(text(),'Reports')]"
    );
    this.getInventory = page.locator("xpath=//a[contains(text(),'Inventory')]");
    this.getDiskUtilization = page.locator(
      "xpath=//a[contains(text(),'Disk Utilization')]"
    );
    this.getCustomerReport = page.locator(
      "xpath=//a[contains(text(),'Customers Report')]"
    );
    this.getNetworkStatus = page.locator(
      "xpath=//a[contains(text(),'Network Status')]"
    );
    this.getAdministrative = page.locator(
      "xpath=//button[contains(text(),'Administrative')]"
    );
    this.getUserManagement = page.locator(
      "xpath=//a[contains(text(),'User Management')]"
    );
    this.getRoles = page.locator("xpath=//a[contains(text(),'Roles')]");
    this.getAuditHistory = page.locator(
      "xpath=//a[contains(text(),'Audit History')]"
    );
    this.getInfrastructure = page.locator(
      "xpath=//a[contains(text(),'Infrastructure')]"
    );
    this.getWANaccelerators = page.locator(
      "xpath=//a[contains(text(),'WAN Accelerators')]"
    );
    this.getMaintenance = page.locator(
      "xpath=//a[contains(text(),'Maintenance')]"
    );
    this.getSentMailLog = page.locator(
      "xpath=//a[contains(text(),'Sent mail log')]"
    );
    this.getInterfaceColors = page.locator(
      "xpath=//a[contains(text(),'Interface Colors')]"
    );
    this.getLegal = page.locator("xpath=//a[contains(text(),'Legal')]");
    this.getHelp = page.locator("xpath=//button[contains(text(),'Help')]");
    this.getAssets = page.locator("xpath=//a[contains(text(),'Assets')]");
    this.getReleaseNotes = page.locator(
      "xpath=//a[contains(text(),'Release notes')]"
    );
    this.getFeedback = page.locator(
      "xpath=//button[contains(text(),'Feedback')]"
    );
  }
}
