/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.deepCursorPath;

import com.seed.deepCursorPath.core.ClientOptions;
import com.seed.deepCursorPath.core.Suppliers;
import com.seed.deepCursorPath.resources.deepcursorpath.AsyncDeepCursorPathClient;
import java.util.function.Supplier;

public class AsyncSeedDeepCursorPathClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<AsyncDeepCursorPathClient> deepCursorPathClient;

    public AsyncSeedDeepCursorPathClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.deepCursorPathClient = Suppliers.memoize(() -> new AsyncDeepCursorPathClient(clientOptions));
    }

    public AsyncDeepCursorPathClient deepCursorPath() {
        return this.deepCursorPathClient.get();
    }

    public static AsyncSeedDeepCursorPathClientBuilder builder() {
        return new AsyncSeedDeepCursorPathClientBuilder();
    }
}
