export type CallProtocolInputUnion = CallProtocolInput;

/** Specifies the supported call protocols */
export interface CallProtocolInput {
    _: 'callProtocol';
    /** True, if UDP peer-to-peer connections are supported */
    udpP2P?: boolean;
    /** True, if connection through UDP reflectors is supported */
    udpReflector?: boolean;
    /** The minimum supported API layer; use 65 */
    minLayer?: number;
    /** The maximum supported API layer; use 65 */
    maxLayer?: number;
    /** List of supported tgcalls versions */
    libraryVersions?: string[];
}
