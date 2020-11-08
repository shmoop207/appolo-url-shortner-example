import {prop, model, schema, Schema,Model,Doc} from '@appolo/mongo'
import {string,number} from '@appolo/validator'


@model()
@schema("ShortUrl")
export class ShortUrl extends Schema {

    @prop({type: String, required: true})
    full: string

    @prop({type: String, required: true})
    short: string

    @prop({type: Number, required: true, default: 0})
    clicks: number
}


export type ShortUrlModel =  Model<ShortUrl>
export type ShortUrlDoc =  Doc<ShortUrl>
