/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.noreqbody;

import com.seed.exhaustive.core.ClientOptions;
import com.seed.exhaustive.core.RequestOptions;
import com.seed.exhaustive.resources.types.object.types.ObjectWithOptionalField;
import java.util.concurrent.CompletableFuture;

public class AsyncNoReqBodyClient {
    protected final ClientOptions clientOptions;

    private final AsyncRawNoReqBodyClient rawClient;

    public AsyncNoReqBodyClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.rawClient = new AsyncRawNoReqBodyClient(clientOptions);
    }

    /**
     * Get responses with HTTP metadata like headers
     */
    public AsyncRawNoReqBodyClient withRawResponse() {
        return this.rawClient;
    }

    public CompletableFuture<ObjectWithOptionalField> getWithNoRequestBody() {
        return this.rawClient.getWithNoRequestBody().thenApply(response -> response.body());
    }

    public CompletableFuture<ObjectWithOptionalField> getWithNoRequestBody(RequestOptions requestOptions) {
        return this.rawClient.getWithNoRequestBody(requestOptions).thenApply(response -> response.body());
    }

    public CompletableFuture<String> postWithNoRequestBody() {
        return this.rawClient.postWithNoRequestBody().thenApply(response -> response.body());
    }

    public CompletableFuture<String> postWithNoRequestBody(RequestOptions requestOptions) {
        return this.rawClient.postWithNoRequestBody(requestOptions).thenApply(response -> response.body());
    }
}
