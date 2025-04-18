/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.publicObject.resources.service;

import com.seed.publicObject.core.ClientOptions;
import com.seed.publicObject.core.RequestOptions;
import java.io.InputStream;

public class ServiceClient {
    protected final ClientOptions clientOptions;

    private final RawServiceClient rawClient;

    public ServiceClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.rawClient = new RawServiceClient(clientOptions);
    }

    /**
     * Get responses with HTTP metadata like headers
     */
    public RawServiceClient withRawResponse() {
        return this.rawClient;
    }

    public InputStream get() {
        return this.rawClient.get().body();
    }

    public InputStream get(RequestOptions requestOptions) {
        return this.rawClient.get(requestOptions).body();
    }
}
