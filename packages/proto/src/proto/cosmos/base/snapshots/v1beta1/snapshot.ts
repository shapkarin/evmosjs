// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/base/snapshots/v1beta1/snapshot.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.snapshots.v1beta1 {
    export class Snapshot extends pb_1.Message {
        constructor(data?: any[] | {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: Metadata;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
                if ("format" in data && data.format != undefined) {
                    this.format = data.format;
                }
                if ("chunks" in data && data.chunks != undefined) {
                    this.chunks = data.chunks;
                }
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
                if ("metadata" in data && data.metadata != undefined) {
                    this.metadata = data.metadata;
                }
            }
        }
        get height() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get format() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set format(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get chunks() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set chunks(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get hash() {
            return pb_1.Message.getField(this, 4) as Uint8Array;
        }
        set hash(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        get metadata() {
            return pb_1.Message.getWrapperField(this, Metadata, 5) as Metadata;
        }
        set metadata(value: Metadata) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        static fromObject(data: {
            height?: number;
            format?: number;
            chunks?: number;
            hash?: Uint8Array;
            metadata?: ReturnType<typeof Metadata.prototype.toObject>;
        }) {
            const message = new Snapshot({});
            if (data.height != null) {
                message.height = data.height;
            }
            if (data.format != null) {
                message.format = data.format;
            }
            if (data.chunks != null) {
                message.chunks = data.chunks;
            }
            if (data.hash != null) {
                message.hash = data.hash;
            }
            if (data.metadata != null) {
                message.metadata = Metadata.fromObject(data.metadata);
            }
            return message;
        }
        toObject() {
            const data: {
                height?: number;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: ReturnType<typeof Metadata.prototype.toObject>;
            } = {};
            if (this.height != null) {
                data.height = this.height;
            }
            if (this.format != null) {
                data.format = this.format;
            }
            if (this.chunks != null) {
                data.chunks = this.chunks;
            }
            if (this.hash != null) {
                data.hash = this.hash;
            }
            if (this.metadata != null) {
                data.metadata = this.metadata.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.height !== undefined)
                writer.writeUint64(1, this.height);
            if (this.format !== undefined)
                writer.writeUint32(2, this.format);
            if (this.chunks !== undefined)
                writer.writeUint32(3, this.chunks);
            if (this.hash !== undefined)
                writer.writeBytes(4, this.hash);
            if (this.metadata !== undefined)
                writer.writeMessage(5, this.metadata, () => this.metadata.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Snapshot {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Snapshot();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.height = reader.readUint64();
                        break;
                    case 2:
                        message.format = reader.readUint32();
                        break;
                    case 3:
                        message.chunks = reader.readUint32();
                        break;
                    case 4:
                        message.hash = reader.readBytes();
                        break;
                    case 5:
                        reader.readMessage(message.metadata, () => message.metadata = Metadata.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Snapshot {
            return Snapshot.deserialize(bytes);
        }
    }
    export class Metadata extends pb_1.Message {
        constructor(data?: any[] | {
            chunk_hashes?: Uint8Array[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chunk_hashes" in data && data.chunk_hashes != undefined) {
                    this.chunk_hashes = data.chunk_hashes;
                }
            }
        }
        get chunk_hashes() {
            return pb_1.Message.getField(this, 1) as Uint8Array[];
        }
        set chunk_hashes(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            chunk_hashes?: Uint8Array[];
        }) {
            const message = new Metadata({});
            if (data.chunk_hashes != null) {
                message.chunk_hashes = data.chunk_hashes;
            }
            return message;
        }
        toObject() {
            const data: {
                chunk_hashes?: Uint8Array[];
            } = {};
            if (this.chunk_hashes != null) {
                data.chunk_hashes = this.chunk_hashes;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.chunk_hashes !== undefined)
                writer.writeRepeatedBytes(1, this.chunk_hashes);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Metadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Metadata {
            return Metadata.deserialize(bytes);
        }
    }
}
