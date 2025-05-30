/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.nullable;

import com.seed.nullable.core.ClientOptions;
import com.seed.nullable.core.Suppliers;
import com.seed.nullable.resources.nullable.AsyncNullableClient;
import java.util.function.Supplier;

public class AsyncSeedNullableClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<AsyncNullableClient> nullableClient;

    public AsyncSeedNullableClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.nullableClient = Suppliers.memoize(() -> new AsyncNullableClient(clientOptions));
    }

    public AsyncNullableClient nullable() {
        return this.nullableClient.get();
    }

    public static AsyncSeedNullableClientBuilder builder() {
        return new AsyncSeedNullableClientBuilder();
    }
}
