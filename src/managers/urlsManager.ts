import {define, singleton} from "@appolo/inject"
import {model} from "@appolo/mongo"
import {ShortUrl, ShortUrlDoc, ShortUrlModel} from "../models/url";
import shortId = require('nanoid')

@define()
@singleton()
export class UrlsManager {

    @model(ShortUrl) private shortUrlModel: ShortUrlModel

    public async getAll(): Promise<ShortUrlDoc[]> {
        let items = await this.shortUrlModel.find({})

        return items;
    }

    public async getOne(shortid: string): Promise<ShortUrlDoc> {
        let doc = await this.shortUrlModel.findOne({short: shortid})

        return doc;
    }

    public async getOneAndIncCounter(guid:string): Promise<ShortUrlDoc>{
        let doc = await this.getOne(guid);

        if(doc){
            doc.clicks++;
            await doc.save();
        }

        return doc;
    }

    public async create(url: string) {
        const doc = new this.shortUrlModel({
            full: url,
            short: shortId.nanoid(5)
        });

        await doc.save();
    }
}
