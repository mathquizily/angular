/**
 * @module
 * @description
 * Starting point to import all public core APIs.
 */
export * from './src/core/metadata';
export * from './src/core/util';
export * from './src/core/prod_mode';
export * from './src/core/di';
export * from './src/facade/facade';
export { enableProdMode } from 'angular2/src/facade/lang';
export { platform, createNgZone, PlatformRef, ApplicationRef } from './src/core/application_ref';
export { APP_ID, APP_COMPONENT, APP_INITIALIZER, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER } from './src/core/application_tokens';
export * from './src/core/zone';
export * from './src/core/render';
export * from './src/core/linker';
export { DebugElement, Scope, inspectElement, asNativeElements } from './src/core/debug/debug_element';
export * from './src/core/testability/testability';
export * from './src/core/change_detection';
export * from './src/core/platform_directives_and_pipes';
export * from './src/core/platform_common_providers';
export * from './src/core/application_common_providers';
export * from './src/core/reflection/reflection';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILGNBQWMscUJBQXFCLENBQUM7QUFDcEMsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLHNCQUFzQixDQUFDO0FBQ3JDLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMscUJBQXFCLENBQUM7QUFDcEMsU0FBUSxjQUFjLFFBQU8sMEJBQTBCLENBQUM7QUFDeEQsU0FBUSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLFFBQU8sNEJBQTRCLENBQUM7QUFDL0YsU0FDRSxNQUFNLEVBQ04sYUFBYSxFQUNiLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsb0JBQW9CLFFBQ2YsK0JBQStCLENBQUM7QUFDdkMsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGNBQWMsbUJBQW1CLENBQUM7QUFDbEMsU0FDRSxZQUFZLEVBQ1osS0FBSyxFQUNMLGNBQWMsRUFDZCxnQkFBZ0IsUUFDWCxnQ0FBZ0MsQ0FBQztBQUN4QyxjQUFjLG9DQUFvQyxDQUFDO0FBQ25ELGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsY0FBYywwQ0FBMEMsQ0FBQztBQUN6RCxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGNBQWMseUNBQXlDLENBQUM7QUFDeEQsY0FBYyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBTdGFydGluZyBwb2ludCB0byBpbXBvcnQgYWxsIHB1YmxpYyBjb3JlIEFQSXMuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvbWV0YWRhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS91dGlsJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvcHJvZF9tb2RlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvZGknO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZmFjYWRlL2ZhY2FkZSc7XG5leHBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuZXhwb3J0IHtwbGF0Zm9ybSwgY3JlYXRlTmdab25lLCBQbGF0Zm9ybVJlZiwgQXBwbGljYXRpb25SZWZ9IGZyb20gJy4vc3JjL2NvcmUvYXBwbGljYXRpb25fcmVmJztcbmV4cG9ydCB7XG4gIEFQUF9JRCxcbiAgQVBQX0NPTVBPTkVOVCxcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBQQUNLQUdFX1JPT1RfVVJMLFxuICBQTEFURk9STV9JTklUSUFMSVpFUlxufSBmcm9tICcuL3NyYy9jb3JlL2FwcGxpY2F0aW9uX3Rva2Vucyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlL3pvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9yZW5kZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9saW5rZXInO1xuZXhwb3J0IHtcbiAgRGVidWdFbGVtZW50LFxuICBTY29wZSxcbiAgaW5zcGVjdEVsZW1lbnQsXG4gIGFzTmF0aXZlRWxlbWVudHNcbn0gZnJvbSAnLi9zcmMvY29yZS9kZWJ1Zy9kZWJ1Z19lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvdGVzdGFiaWxpdHkvdGVzdGFiaWxpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvcGxhdGZvcm1fZGlyZWN0aXZlc19hbmRfcGlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9wbGF0Zm9ybV9jb21tb25fcHJvdmlkZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG4iXX0=