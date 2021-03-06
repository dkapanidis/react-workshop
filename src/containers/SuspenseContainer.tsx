import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';
import Button from '../ui/buttons/Button';

// SuspenseContainer provides generic loading and error states.
interface Props { children: any }
function SuspenseContainer({ children }: Props) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }: any) => (
        <div>
          There was an error!{" "}
          <Button onClick={() => resetErrorBoundary()} text="Try again" />
          <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
        </div>
      )}
      onReset={reset}
    >
      <Suspense fallback={<div data-testid="loading">
        <div className="absolute inset-1/2 -mt-2.5 -mx-2.5">
        <CircularProgress color="inherit" className="text-blue-500" />
        </div>
      </div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseContainer
