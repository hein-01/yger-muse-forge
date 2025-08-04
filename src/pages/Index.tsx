// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg border">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          🎉 Your App is Working!
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
          This content should now be clearly visible
        </p>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded border border-blue-200 dark:border-blue-700">
          <p className="text-blue-800 dark:text-blue-200">
            If you can see this box, your app is rendering properly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
