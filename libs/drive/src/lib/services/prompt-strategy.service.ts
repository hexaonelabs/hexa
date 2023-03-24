import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable()
export class PromptStrategyService  {
  
  async askSetupService(serviceName?: string): Promise<{token: string, serviceName: string}|undefined> { 
    const isNotDefaultService = serviceName && !serviceName.includes('default');
    if (isNotDefaultService) {
      return;
    }
    const userWantSetup = await this._promptInfos().then(r => r === 'ok');
    if (!userWantSetup) {
      return;
    }
    const {role, data: {values: selectedService} = {}} = await this._promptSelectService();
    if (!selectedService || role !== 'ok') {
      return;
    }
    const {data: {values: apiConfig}, role: promptAPIKeys} = await this._promptAPIKeys(selectedService);
    if (promptAPIKeys !== 'ok') {
      return;
    }
    return  {...apiConfig, serviceName: selectedService};
  }

  private async _promptInfos() {
    const ctrl = new AlertController();
    const alertUI = await ctrl.create({
      header: `Configure pinning service`,
      subHeader: `This app is using IPFS to store your data and delegate to external service to pin your data on the IPFS network.`,
      message: 'Do you want to configure the pinning service with your own account? If not, the default service will be used and your data will be stored on the IPFS network and pinned by the default service but this will not guarantee the long term availability of your data.',
      buttons: [
        { text: 'No', role: 'cancel' },
        { text: 'Yes', role: 'ok' }
      ]
    });
    await alertUI.present();
    const { role } = await alertUI.onDidDismiss();
    return role;
  }

  private async _promptSelectService() {
    const ctrl = new AlertController();
    const alertUI = await ctrl.create({
      header: `Select pinning service`,
      message: `You can select the pinning service you want to use to pin your data on the IPFS network. If you don't know what to choose, just "Pinata" the default service and go create an account on <a href="https://pinata.cloud" target="_blank">https://pinata.cloud</a>. to get your own API key.`,
      inputs: [
        {
          name: 'pinata',
          type: 'radio',
          label: 'Pinata',
          value: 'pinata',
          checked: true,
        },
        {
          name: 'web3.storage',
          type: 'radio',
          label: 'Web3.Storage',
          value: 'web3.storage',
        },
      ],
      mode: 'ios',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Ok', role: 'ok' }
      ]
    });
    await alertUI.present();
    return await alertUI.onDidDismiss();
  }

  private async _promptAPIKeys(serviceName: 'pinata' | 'web3.storage') {
    const availableService = [
      {name:'pinata', url: 'https://pinata.cloud'}, 
      {name: 'web3.storage', url: 'https://web3.storage/'}
    ];
    const urlAPI = availableService.find(s => s.name === serviceName)?.url;
    const ctrl = new AlertController();
    const alertUI = await ctrl.create({
      header: `Configure pinning service`,
      subHeader: `Please enter your API keys to configure the pinning service.`,
      message: `You can get it by creating an free account on <a href="${urlAPI}" target="_blank">${urlAPI}</a>.`,
      inputs: [
        { 
          name: 'token',
          type: 'text',
          placeholder: 'API Token',
        },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Ok', role: 'ok' }
      ]
    });
    await alertUI.present();
    return await alertUI.onDidDismiss();
  }
} 