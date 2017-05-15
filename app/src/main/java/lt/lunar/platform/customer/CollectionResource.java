package lt.lunar.platform.customer;

import java.util.List;

public class CollectionResource<T> {

    private List<T> entries;

    public CollectionResource(List<T> entries) {
        this.entries = entries;
    }

    public List<T> getEntries() {
        return entries;
    }
}
