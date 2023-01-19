import { Encrypter } from '../../protocols/encrypter'
import { AddAccount, AddAccountModel } from '../../../domain/usercases/add-account'
import { AccountModel } from '../../../domain/models/account'

export class DBAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
