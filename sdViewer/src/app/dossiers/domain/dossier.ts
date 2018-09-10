import { SdObject } from 'src/app/common/domain/sd-object';

export class Dossier extends SdObject {
  type: string;
  typeClient: string;
  typeContrat: string;
  etat: string;
}
